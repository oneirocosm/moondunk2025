import Button from '@mui/material/Button';
import exampleImage from './image.png';
import { useReplicant } from '@nodecg/react-hooks';
import { Donation } from '../../types/donation';
import { DashboardThemeProvider } from './components/DashboardThemeProvider';

import { render } from '../render';

const App = () => {
  const [queuedDonations, _] = useReplicant<Array<Donation>>('queueddonations');

  return (
    <DashboardThemeProvider>
      <img src={exampleImage} />
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "400px",
        fontWeight: 600,
      }}>
        <span style={{

        }}>Donor</span>
        <span style={{
          width: "80px",
          minWidth: "80px",
        }}>Donation</span>
        <span style={{
          width: "80px",
          minWidth: "80px",
        }}>Time</span>
      </div>
      {queuedDonations?.map((donation: Donation) => {

        return <div key={`donation-row-${donation.id}`} style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "400px",
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
        }}>${donation.amountDisplay.toFixed(2)}</span>
        <span style={{
          minWidth: "80px",
          width: "80px",
        }}>${donation.amountDisplay.toFixed(2)}</span>
      </div>
      })}
    </DashboardThemeProvider>
  );
};

render(<App />);
