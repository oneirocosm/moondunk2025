import Button from '@mui/material/Button';
import { useReplicant } from '@nodecg/react-hooks';
import { Donation } from '../../types/donation';
import { DashboardThemeProvider } from './components/DashboardThemeProvider';
import React from "react";
import Countdown from "react-countdown";
import { motion, AnimatePresence } from 'framer-motion';

import { render } from '../render';

const initRowItem = {
  opacity: 0,
  y: 16,
  scale: 0.98,
  filter: 'blur(4px)',
};
const animateRowItem = {
  opacity: 1,
  y: 0,
  scale: 1,
  filter: 'blur(0px)',
};
const exitRowItem = {
  opacity: 0,
  y: -16,
  scale: 0.98,
  filter: 'blur(4px)',
};
const transitionRowItem = {
  duration: 0.3,
  ease: "easeOut",
};


const App = () => {
  const [queuedDonations, _] = useReplicant<Array<Donation>>('queueddonations');
  const [dispensing, setDispensing] = React.useState<Donation | undefined>(undefined);
  const [nondispensing, setNondispensing] = React.useState<Array<Donation>>([]);

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



  return (
    <DashboardThemeProvider>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%",
        maxWidth: "400px",
        fontWeight: 600,
        gap: "10px",
        borderBottom: "solid 3px white",
        marginBottom: "2px",
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
        flexDirection: "column"
      }}>
        <AnimatePresence>
        {
          dispensing && <motion.div key={`donation-row-${dispensing.id}`} style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: "10px",
          width: "100%",
          maxWidth: "400px",
        }}
        initial={initRowItem}
        animate={animateRowItem}
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
          }}>{dispensingCountdown}</span>
        </motion.div>

        }
        {nondispensing?.map((donation: Donation) => {
          const time = Math.floor(donationToSeconds(donation.amountDisplay) * 100) / 100;

          return <motion.div key={`donation-row-${donation.id}`} style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: "10px",
          width: "100%",
          maxWidth: "400px",
        }}
        initial={initRowItem}
        animate={animateRowItem}
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
          }}>{time.toFixed(2)}s</span>
        </motion.div>
        })}</AnimatePresence>
      </div>
    </DashboardThemeProvider>
  );
};

function donationToSeconds(donationAmount: number): number {
	const WATER_RATE = parseFloat(nodecg.bundleConfig["MOONDUNK_RATE"] as string ?? "1"); // estimated gallons_per_second
	const BUCKET_VOLUME = parseFloat(nodecg.bundleConfig["MOONDUNK_VOLUME"] as string ?? "1"); // estemated gallons
	const DOLLAR_GOAL = parseFloat(nodecg.bundleConfig["MOONDUNK_GOAL"] as string ?? "1"); // estimated USD per dunk
	const TIME_PER_DOLLAR = BUCKET_VOLUME / (WATER_RATE * DOLLAR_GOAL);

  return donationAmount * TIME_PER_DOLLAR;
}

render(<App />);
