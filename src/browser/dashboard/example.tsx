import Button from '@mui/material/Button';
import { useReplicant } from '@nodecg/react-hooks';
import { Donation } from '../../types/donation';
import { DashboardThemeProvider } from './components/DashboardThemeProvider';
import React from "react";
import Countdown from "react-countdown";

import { render } from '../render';

const App = () => {
  const [queuedDonations, _] = useReplicant<Array<Donation>>('queueddonations');
  const [dispensing, setDispensing] = React.useState<Donation | undefined>(undefined);

  React.useEffect(() => {
    if (queuedDonations == undefined || queuedDonations.length == 0) {
      setDispensing(undefined);
      return;
    }
    setDispensing(queuedDonations[0]);
  }, [queuedDonations]);



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
        {
          dispensing && <div key={`donation-row-${dispensing.id}`} style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: "10px",
          width: "100%",
          maxWidth: "400px",
        }}>
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
          }}><Countdown 
            date={Date.now() + donationToSeconds(dispensing.amountDisplay)*1000}
            intervalDelay={0}
            precision={2}
            renderer={(props) => <span>{(Math.floor(props.total) / 1000).toFixed(2)}s</span>}
          /></span>
        </div>

        }
        {queuedDonations?.map((donation: Donation) => {
          const time = Math.floor(donationToSeconds(donation.amountDisplay) * 100) / 100;

          return <div key={`donation-row-${donation.id}`} style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: "10px",
          width: "100%",
          maxWidth: "400px",
        }}>
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
        </div>
        })}
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
