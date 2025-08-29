import { useReplicant } from '@nodecg/react-hooks';
import { Donation } from '../../types/donation';
import React from "react";
import Countdown from "react-countdown";
import { motion, AnimatePresence } from 'framer-motion';
import { render } from '../render';
import './css/style.css';

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
      <div style={{
        background: `${MOONSHOT_CORE_DARK}`,
        width: "369px",
        height: "485px",
        overflowY: "hidden",
        padding: "14px",
        border: `solid 3px ${MOONSHOT_CORE_YELLOW}`,
        fontFamily: "Exo2",
        color: "white",
        margin: 0,
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
          width: "90px",
          minWidth: "80px",
          flex: "0 0 80px",
        }}>Amount</span>
        <span style={{
          width: "90px",
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
            minWidth: "90px",
            width: "90px",
            flex: "0 0 90px",
          }}>${dispensing.amountDisplay.toFixed(2)}</span>
          <span style={{
            minWidth: "90px",
            width: "90px",
            flex: "0 0 90px",
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
            minWidth: "90px",
            width: "90px",
            flex: "0 0 90px",
          }}>${donation.amountDisplay.toFixed(2)}</span>
          <span style={{
            minWidth: "90px",
            width: "90px",
            flex: "0 0 90px",
            fontVariantNumeric: "tabular-nums",
          }}>{time.toFixed(2)}s</span>
        </motion.div>
        </motion.div>
        })}</AnimatePresence>
      </div>
      </div>
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
