import type NodeCG from 'nodecg/types';
import type {Donation} from "../types/donation";
import "dotenv/config";
import {Queue} from "elegant-queue";
import {randomUUID} from "crypto";

import GpioDebug from "./debug-tools"

let Gpio = GpioDebug;

let WATER_RATE = 1;
let BUCKET_VOLUME = 1;
let DOLLAR_GOAL = 1;
let TIME_PER_DOLLAR = BUCKET_VOLUME / (WATER_RATE * DOLLAR_GOAL);
const MS_PER_S = 1000.0;

const eventQueue = new Queue<Donation>();
let solenoidCtrl = new Gpio(Number(process.env["MOONDUNK_PIN"]), 'out');

export default async function (nodecg: NodeCG.ServerAPI) {
	nodecg.log.info("Hello, from your bundle's extension!");
	nodecg.log.info("I'm where you put all your server-side code.");
	nodecg.log.info(
		`To edit me, open "${__filename.replace(
			'build/extension',
			'src/extension',
		)}" in your favorite text editor or IDE.`,
	);
	await load(nodecg);


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
			donor_name: "Jacqueline Swampert Test",
			amountDisplay: 5.10,
		}
		eventQueue.enqueue(a);
		nodecg.sendMessage("updatequeue");
		queuedDonationsRep.value = [...eventQueue]
	}, 10000);

	processDunks(queuedDonationsRep, usedDonationIdsRep);

	nodecg.listenFor("updatequeue", () => {
		console.log("hitting here:", [...eventQueue])
		queuedDonationsRep.value = [...eventQueue]
	})

};

async function processDunks(queuedDonationsRep: NodeCG.ServerReplicant<Array<Donation>>, usedDonationIdsRep: NodeCG.ServerReplicant<Array<string>>) {
	while (true) {
 		if (eventQueue.size() != 0) {
    		const donation = eventQueue.peek();
 	    	await processNext(donation);
			// event to update queue replicant
			//nodecg?.sendMessage("updatequeue");
    		eventQueue.dequeue();
			queuedDonationsRep.value = [...eventQueue];
			usedDonationIdsRep.value = [...usedDonationIdsRep?.value ?? [], donation.id];
 		}
		await sleep(100);
	}
    //setTimeout(processDunks, 100, [nodecg, usedDonationIdsRep]);
}

async function processNext(event: Donation) {
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
}

async function timer(time: number, fn: (time: number) => void, step: number) {
    fn(time);
    while (time > 0.0001) {
        await new Promise(r => setTimeout(r, step * MS_PER_S));
        return await timer(Math.max(time - step, 0.0), fn, step);
    }
}

async function sleep(time: number) {
	return new Promise(r => setTimeout(r, time));
}

async function load(nodecg: NodeCG.ServerAPI) {
	WATER_RATE = parseFloat(nodecg.bundleConfig["MOONDUNK_RATE"] as string ?? "1"); // estimated gallons_per_second
	BUCKET_VOLUME = parseFloat(nodecg.bundleConfig["MOONDUNK_VOLUME"] as string ?? "1"); // estemated gallons
	DOLLAR_GOAL = parseFloat(nodecg.bundleConfig["MOONDUNK_GOAL"] as string ?? "1"); // estimated USD per dunk
	TIME_PER_DOLLAR = BUCKET_VOLUME / (WATER_RATE * DOLLAR_GOAL);
	if (nodecg.bundleConfig["MOONDUNK_DEBUG"] === "true") {
		try{
			const GpioActual = await import("onoff");
			// @ts-ignore
			Gpio = GpioActual.Gpio
		} catch (e) {
			console.log("could not use onoff library")
		}
	}
	solenoidCtrl = new Gpio(Number(nodecg.bundleConfig["MOONDUNK_PIN"]), 'out');
}
