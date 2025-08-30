import Button from '@mui/material/Button';
import { useReplicant } from '@nodecg/react-hooks';
import { Donation } from '../../types/donation';
import { DashboardThemeProvider } from './components/DashboardThemeProvider';
import React from "react";
import Countdown from "react-countdown";
import { motion, AnimatePresence } from 'framer-motion';
import { render } from '../render';
import './css/style.css';
import {randomUUID} from "crypto";

const MOONSHOT_CORE_DARK = '#040328';
const MOONSHOT_CORE_PINK = '#D50078';
const MOONSHOT_CORE_YELLOW = '#FFEE83';
const MOONSHOT_EXTRA_DARK_BLUE = '#1B1971';
const MOONSHOT_EXTRA_BLUE = '#467BF8';
const MOONSHOT_EXTRA_LIGHT_BLUE = '#A8BDF0';
const MOONSHOT_EXTRA_BURGUNDY = '#990066';
const MOONSHOT_EXTRA_PINK = '#FCACC7';
const MOONSHOT_EXTRA_ORANGE = '#E68600';
const MOONSHOT_EXTRA_GOLD = '#FFC022';

const initRowItem = {
  opacity: 0,
  y: 16,
  scale: 0.98,
  filter: 'blur(4px)',
  boxShadow: `0 0 0 0 transparent`,
};
const animateRowItem = {
  opacity: 1,
  y: 0,
  scale: 1,
  filter: 'blur(0px)',
  boxShadow: `0 0 0 0 transparent`,
};
const exitRowItem = {
  opacity: 0,
  y: -16,
  scale: 0.98,
  filter: 'blur(4px)',
  boxShadow: `0 0 0 0 transparent`,
};
const transitionRowItem = {
  duration: 0.5,
  ease: "easeOut",
};

interface TwitchSub {
	user_name: string;
	user_id: string;
}

const App = () => {
  const [queuedDonations, _] = useReplicant<Array<Donation>>('queueddonations');
  const [dispensing, setDispensing] = React.useState<Donation | undefined>(undefined);
  const [nondispensing, setNondispensing] = React.useState<Array<Donation>>([]);
  const [twitchSubs, setTwitchSubs] = useReplicant<Array<TwitchSub>>("twitchsubs");
  const [manualDonoName, setManualDonoName] = React.useState<string>("");
  const [manualDonoAmount, setManualDonoAmount] = React.useState<string>("");
  const [overriddenTotal, setOverriddenTotal] = React.useState<number>(0);
  const [overriddenTotalOut, setOverriddenTotalOut] = useReplicant<number>("overriddentotal");

  React.useEffect(() => {
    if (queuedDonations == undefined || queuedDonations.length == 0) {
      setDispensing(undefined);
      setNondispensing([]);
      return;
    }
    setDispensing(queuedDonations[0]);
    setNondispensing(queuedDonations.slice(1));
  }, [queuedDonations]);

  const dispensingCountdown = React.useMemo(() => {
    if (dispensing == undefined) {
      return <></>
    }
    return <Countdown 
      date={Date.now() + donationToSeconds(dispensing.amountDisplay)*1000}
      intervalDelay={0}
      precision={2}
      renderer={(props) => <span>{(Math.floor(props.total) / 1000).toFixed(2)}s</span>}
    />

  }, [dispensing?.id])


  const manualEntry = () => {
    let numAmount = parseFloat(manualDonoAmount);
    if (isNaN(numAmount)) {
      numAmount = 0;
    }
    const manualDono: Donation = {
      id: String(Math.floor(Math.random()*100000)),
      donor_name: manualDonoName,
      amountDisplay: numAmount,
    }

    nodecg.sendMessage("manualdono", manualDono);
    setManualDonoName("");
    setManualDonoAmount("");
  }

  const manualTotal = () => {
    setOverriddenTotalOut(overriddenTotal);
  }

  return (
    <DashboardThemeProvider>
      <div style={{
        backgroundColor: MOONSHOT_CORE_DARK,
        width: "100%",
        maxWidth: "400px",
        minHeight: "200px",
        padding: "14px",
        borderRadius: "10px",
        border: `solid 3px ${MOONSHOT_CORE_PINK}`,
        color: MOONSHOT_CORE_PINK,
        fontFamily: "Exo2",
        marginBottom: 20,
      }}>
      <div style={{width: "100%", borderBottom: `solid 3px ${MOONSHOT_CORE_PINK}`, fontWeight: 600}}>Twitch Subs</div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxHeight: "400px",
        overflowY: "hidden",
      }}>
        <AnimatePresence>
        {twitchSubs?.map((sub: TwitchSub, idx) => {

          return <motion.div key={`twitch-sub-hbox-${sub.user_id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
          <motion.div key={`twitch-sub-row-${sub.user_id}`} style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: "10px",
          width: "100%",
          maxWidth: "400px",
          backgroundColor: idx % 2 == 0 ? "inherit" : '#040348'
        }}
        initial={initRowItem}
        animate={{...animateRowItem, }}
        exit={exitRowItem}
        transition={transitionRowItem}
        >
          <span style={{
            textOverflow: "ellipsis",
            overflowX: "hidden",
            whiteSpace: "nowrap",
            flexGrow: 1,
          }}>{sub.user_name}</span>
          <Button style={{
            minWidth: "80px",
            width: "80px",
            height: "80%",
            flex: "0 0 80px",
            backgroundColor: "red",
            color: "white",
          }}
          onClick={() => setTwitchSubs(twitchSubs?.filter((arbSub) => arbSub.user_id != sub.user_id))}
          >&times;</Button>
        </motion.div>
        </motion.div>
        })}
        </AnimatePresence>
        </div>
        </div>

      <div style={{
        backgroundColor: MOONSHOT_CORE_DARK,
        width: "100%",
        maxWidth: "400px",
        minHeight: "200px",
        maxHeight: "600px",
        overflowY: "hidden",
        padding: "14px",
        borderRadius: "10px",
        border: `solid 3px ${MOONSHOT_CORE_YELLOW}`,
        fontFamily: "Exo2",
      }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        fontWeight: 600,
        gap: "10px",
        borderBottom: `solid 3px ${MOONSHOT_CORE_YELLOW}`,
        marginBottom: "10px",
        color: MOONSHOT_CORE_YELLOW,
      }}>
        <span style={{
          flex: "1 1 auto",

        }}>Donor</span>
        <span style={{
          width: "80px",
          minWidth: "80px",
          flex: "0 0 80px",
        }}>Amount</span>
        <span style={{
          width: "80px",
          minWidth: "80px",
          flex: "0 0 80px",
        }}>Time</span>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}>
        <AnimatePresence>
        {
          dispensing && <motion.div key={`donation-row-hbox-${dispensing.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
          <motion.div key={`donation-row-${dispensing.id}`} style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: "10px",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "7px",
          padding: "2px",
          transformOrigin: "center left",
        }}
        initial={initRowItem}
        animate={{...animateRowItem, boxShadow: `0 0 0 3px ${MOONSHOT_CORE_PINK}`, fontSize: "22px", fontWeight: 600, backgroundColor: MOONSHOT_EXTRA_DARK_BLUE, color: MOONSHOT_EXTRA_GOLD}}
        exit={exitRowItem}
        transition={transitionRowItem}
        >
          <span style={{
            textOverflow: "ellipsis",
            overflowX: "hidden",
            whiteSpace: "nowrap",
            flexGrow: 1,
          }}>{dispensing.donor_name}</span>
          <span style={{
            minWidth: "80px",
            width: "80px",
            flex: "0 0 80px",
          }}>${dispensing.amountDisplay.toFixed(2)}</span>
          <span style={{
            minWidth: "80px",
            width: "80px",
            flex: "0 0 80px",
            fontVariantNumeric: "tabular-nums",
          }}>{dispensingCountdown}</span>
        </motion.div>
        </motion.div>

        }
        {nondispensing?.map((donation: Donation, idx) => {
          const time = Math.floor(donationToSeconds(donation.amountDisplay) * 100) / 100;

          return <motion.div key={`donation-row-hbox-${donation.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
          <motion.div key={`donation-row-${donation.id}`} style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: "10px",
          width: "100%",
          maxWidth: "400px",
          backgroundColor: idx % 2 == 0 ? "inherit" : '#040348'
        }}
        initial={initRowItem}
        animate={{...animateRowItem, }}
        exit={exitRowItem}
        transition={transitionRowItem}
        >
          <span style={{
            textOverflow: "ellipsis",
            overflowX: "hidden",
            whiteSpace: "nowrap",
            flexGrow: 1,
          }}>{donation.donor_name}</span>
          <span style={{
            minWidth: "80px",
            width: "80px",
            flex: "0 0 80px",
          }}>${donation.amountDisplay.toFixed(2)}</span>
          <span style={{
            minWidth: "80px",
            width: "80px",
            flex: "0 0 80px",
            fontVariantNumeric: "tabular-nums",
          }}>{time.toFixed(2)}s</span>
        </motion.div>
        </motion.div>
        })}</AnimatePresence>
      </div>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px",
      }}>
      <span>Manual Donation Input</span>
        <div><span>Name:&nbsp;</span><input style={{width: 200}} value={manualDonoName} onChange={(e) => setManualDonoName(e.currentTarget.value)}/></div>
        <div><span>Amount:&nbsp;</span><input style={{width: 200}} value={manualDonoAmount} onChange={(e) => setManualDonoAmount(e.currentTarget.value)}/></div>
        <button type="submit" style={{width: 100}} onClick={() => manualEntry()}>Submit</button>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px",
      }}>
      <span>Manual Total Input</span>
        <div><span>Total:&nbsp;</span><input type="number" style={{width: 200}} value={overriddenTotal} onChange={(e) => setOverriddenTotal(Number(e.currentTarget.value))}/></div>
        <button type="submit" style={{width: 100}} onClick={() => manualTotal()}>Submit</button>
      </div>
    </DashboardThemeProvider>
  );
};

function donationToSeconds(donationAmount: number): number {
	const WATER_RATE = nodecg.bundleConfig["MOONDUNK_RATE"] ?? 1; // estimated gallons_per_second
	const BUCKET_VOLUME = nodecg.bundleConfig["MOONDUNK_VOLUME"] ?? 1; // estemated gallons
	const DOLLAR_GOAL = nodecg.bundleConfig["MOONDUNK_GOAL"] ?? 1; // estimated USD per dunk
	const TIME_PER_DOLLAR = BUCKET_VOLUME / (WATER_RATE * DOLLAR_GOAL);

  return donationAmount * TIME_PER_DOLLAR;
}

render(<App />);
