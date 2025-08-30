import { useReplicant } from '@nodecg/react-hooks';
import { Donation } from '../../types/donation';
import React from "react";
import Countdown from "react-countdown";
import { motion, AnimatePresence } from 'framer-motion';
import { render } from '../render';
import './css/style.css';
import totalBucket from "./components/total-bucket.png";
import Wave from "react-wavify";
import { useIncrementNumber } from './components/useIncrementNumber';

const MOONSHOT_CORE_DARK = '#040328';
const MOONSHOT_EXTRA_LIGHT_BLUE = '#A8BDF0';
const MOONSHOT_CORE_YELLOW = '#FFEE83';
const MOONSHOT_EXTRA_GOLD = '#FFC022';

const App = () => {
  const [queuedDonations, _] = useReplicant<Array<Donation>>('queueddonations');
  const [total, setTotal] = useReplicant<number>("total", {bundle: "nodecg-tiltify"});
  const [dispensing, setDispensing] = React.useState<Donation | undefined>(undefined);
  const totalDisplay = useIncrementNumber(total ?? 0);

  const yScaleFactor = React.useMemo(() => {
    const target = nodecg.bundleConfig.MOONDUNK_TARGET ?? 2000;
    const minScale = 1;
    const maxScale = 41;
    const amount = total ?? 0;
    const ratio = amount / target;
    return Math.max(minScale, Math.min(maxScale, minScale*(1-ratio) + maxScale*ratio))

  }, [total])

  React.useEffect(() => {
    if (queuedDonations == undefined || queuedDonations.length == 0) {
      setDispensing(undefined);
      return;
    }
      setDispensing(queuedDonations[0]);
    }, [queuedDonations]);

  React.useEffect(() => {
    if (dispensing == undefined) {
        return;
    };


  }, [dispensing?.id])

  const waveBottom = 45 + 22.5 * yScaleFactor;
  return <div style={{
      position: "absolute",
      background: `url(${totalBucket})`,
      width: 208,
      height: 1080,
      fontFamily: "Exo2",
      color: MOONSHOT_CORE_YELLOW,
      textShadow: `-2px -2px 0 ${MOONSHOT_CORE_DARK}, 2px -2px 0 ${MOONSHOT_CORE_DARK}, -2px 2px 0 ${MOONSHOT_CORE_DARK}, 2px 2px 0 ${MOONSHOT_CORE_DARK}`,
      fontSize: "26px",
    }}>
        <div style={{
            position: "absolute",
            transformOrigin: "bottom left",
            left: 90,
            bottom: 45,
            width: 100,
            height: 22.5,
            transform: `scaleY(${yScaleFactor})`,
            backgroundColor: MOONSHOT_EXTRA_LIGHT_BLUE,
            opacity: 0.9,
            zIndex: -1,
        }}/>
        <Wave fill={MOONSHOT_EXTRA_LIGHT_BLUE}
          paused={false}
          style={{
            position: "absolute",
            transformOrigin: "bottom left",
            left: 90,
            bottom: waveBottom,
            width: 100,
            height: 22.5,
            transform: `scaleY(2)`,
            opacity: 0.9,
            zIndex: -1,
          }}
          options={{
            height: 20,
            amplitude: 10,
            speed: 0.3,
            points: 2,
          }}
        />
        <Wave fill={MOONSHOT_EXTRA_LIGHT_BLUE}
          paused={false}
          style={{
            position: "absolute",
            transformOrigin: "bottom left",
            left: 90,
            bottom: waveBottom,
            width: 100,
            height: 22.5,
            transform: `scaleY(2)`,
            opacity: 0.9,
            zIndex: -1,
          }}
          options={{
            height: 20,
            amplitude: 10,
            speed: 0.6,
            points: 1,
          }}
        />
        <Wave fill={MOONSHOT_EXTRA_LIGHT_BLUE}
          paused={false}
          style={{
            position: "absolute",
            transformOrigin: "bottom left",
            left: 90,
            bottom: waveBottom,
            width: 100,
            height: 22.5,
            transform: `scaleY(2)`,
            opacity: 0.9,
            zIndex: -1,
          }}
          options={{
            height: 20,
            amplitude: 10,
            speed: 0.5,
            points: 2,
          }}
        />
        <span style={{
            position: "absolute",
            left: 125,
            bottom: 54,
        }}>$0</span>
        <span style={{
            position: "absolute",
            left: 110,
            bottom: 278,
        }}>${Math.floor((nodecg.bundleConfig?.MOONDUNK_TARGET ?? 2000) / 4)}</span>
        <span style={{
            position: "absolute",
            left: 103,
            bottom: 502,
        }}>${Math.floor((nodecg.bundleConfig?.MOONDUNK_TARGET ?? 2000) / 2)}</span>
        <span style={{
            position: "absolute",
            left: 103,
            bottom: 728,
        }}>${Math.floor((nodecg.bundleConfig?.MOONDUNK_TARGET ?? 2000) * 3 / 4)}</span>
        <span style={{
            position: "absolute",
            left: 95,
            bottom: 952,
        }}>${Math.floor(nodecg.bundleConfig?.MOONDUNK_TARGET ?? 2000)}+</span>
        <span style={{
            position: "absolute",
            left: 106,
            bottom: 1014,
            fontSize: 34,
            color: MOONSHOT_EXTRA_GOLD,
        }}>${totalDisplay}</span>
    </div>
}

render(<App />);