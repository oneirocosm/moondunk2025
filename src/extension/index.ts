import type NodeCG from 'nodecg/types';
import type {Donation} from "../types/donation";
import "dotenv/config";
import {Queue} from "elegant-queue";
import {randomUUID} from "crypto";

import GpioDebug from "./debug-tools"

let Gpio = GpioDebug;
if (process.env["MOONDUNK_DEBUG"] !== "false") {
	async function install() {
		try{
			const GpioActual = await import("onoff");
			// @ts-ignore
			Gpio = GpioActual
		} catch (e) {
			console.log("could not use onoff library")
		}
	}
	install();
}

// you can change this stuff for setup
const WATER_RATE = parseFloat(process.env["MOONDUNK_RATE"] as string ?? "1"); // estimated gallons_per_second
const BUCKET_VOLUME = parseFloat(process.env["MOONDUNK_VOLUME"] as string ?? "1"); // estemated gallons
const DOLLAR_GOAL = parseFloat(process.env["MOONDUNK_GOAL"] as string ?? "1"); // estimated USD per dunk

// but don't change these unless something has gone very wrong
const TIME_PER_DOLLAR = BUCKET_VOLUME / (WATER_RATE * DOLLAR_GOAL);
const MS_PER_S = 1000.0;

const eventQueue = new Queue<Donation>();
const solenoidCtrl = new Gpio(Number(process.env["MOONDUNK_PIN"]), 'out');

export default async function (nodecg: NodeCG.ServerAPI) {
	nodecg.log.info("Hello, from your bundle's extension!");
	nodecg.log.info("I'm where you put all your server-side code.");
	nodecg.log.info(
		`To edit me, open "${__filename.replace(
			'build/extension',
			'src/extension',
		)}" in your favorite text editor or IDE.`,
	);


	const queuedDonationsRep = nodecg.Replicant<Array<Donation>>("queueddonations");
	const usedDonationIdsRep = nodecg.Replicant<Array<string>>("useddonationids");

	const allDonationsRep = nodecg.Replicant<Array<Donation>>("alldonations", "tiltify-nodecg");
	allDonationsRep.on('change', (newValue: Array<Donation> | undefined, oldValue: Array<Donation> | undefined) => {
		const usedSet = new Set(usedDonationIdsRep.value ?? []);

		for (const donation of newValue ?? []) {
			if (usedSet.has(donation.id)) {
				continue;
			}
			eventQueue.enqueue(donation);
		}
		// event to update queue replicant
		nodecg.sendMessage("updatequeue");
	});

	setInterval(() => {
		let a: Donation = {
			id: randomUUID(),
			donor_name: "test",
			amountDisplay: 112.10,
		}
		eventQueue.enqueue(a);
		nodecg.sendMessage("updatequeue");
	}, 10000);

	processDunks(nodecg);

	nodecg.listenFor("updatequeue", () => {
		queuedDonationsRep.value = [...eventQueue]
	})

};

async function processDunks(nodecg: NodeCG.ServerAPI) {
    if (eventQueue.size() != 0) {
        await processNext();
		// event to update queue replicant
		nodecg.sendMessage("updatequeue");
    }
    setTimeout(processDunks, 100);
}

async function processNext() {
    const event = eventQueue.peek();
	if (event == undefined) {
		return;
	}

    const amountUsd = event.amountDisplay;
    const duration = amountUsd * TIME_PER_DOLLAR;
    const msg = `\n${event.donor_name} donated $${amountUsd} USD for ${duration} seconds of water`;
    console.log(msg);


    // set pin low (water flows)
    solenoidCtrl.writeSync(0);

    const dispenseMsgr = (time: number) => {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(`Dispensing water: ${time.toFixed(2)}`);
		// todo: update the timer on the replicant (maybe not necessary. can use two timers fine)
    }
    await timer(duration, dispenseMsgr, 0.1);
    console.log()

    // set pin high (water stops)
    solenoidCtrl.writeSync(1);
    console.log(`Water for ${event.donor_name} finished dispensing`);
    eventQueue.dequeue();
}

async function timer(time: number, fn: (time: number) => void, step: number) {
    fn(time);
    while (time > 0.0001) {
        await new Promise(r => setTimeout(r, step * MS_PER_S));
        return await timer(Math.max(time - step, 0.0), fn, step);
    }
}