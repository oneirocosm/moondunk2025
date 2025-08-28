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
      {queuedDonations?.map((donation: Donation) => <div style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}>
        <span>{donation.donor_name}</span>
        <span>{donation.amountDisplay}</span>
      </div>)}
      <span>asdfs</span>
    </DashboardThemeProvider>
  );
};

render(<App />);
