import Button from '@mui/material/Button';
import { useReplicant } from '@nodecg/react-hooks';
import { Donation } from '../../types/donation';
import { DashboardThemeProvider } from './components/DashboardThemeProvider';

import { render } from '../render';

const App = () => {
  const [queuedDonations, _] = useReplicant<Array<Donation>>('queueddonations');

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
        }}>Donation</span>
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
        {queuedDonations?.map((donation: Donation) => {

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
          }}>${donation.amountDisplay.toFixed(2)}</span>
        </div>
        })}
      </div>
    </DashboardThemeProvider>
  );
};

render(<App />);
