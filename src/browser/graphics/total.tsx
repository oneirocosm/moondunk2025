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
import Splash from './components/Splash';

const MOONSHOT_CORE_DARK = '#040328';
const MOONSHOT_EXTRA_LIGHT_BLUE = '#A8BDF0';
const MOONSHOT_CORE_YELLOW = '#FFEE83';
const MOONSHOT_EXTRA_GOLD = '#FFC022';

type WaterfallInfo = {
    id: string;
    top: number;
    height: number;
    expectedAmount: number
}

const App = () => {
  const [queuedDonations, _] = useReplicant<Array<Donation>>('queueddonations');
  const [total, setTotal] = useReplicant<number>("total", {bundle: "nodecg-tiltify"});
  //const [total, setTotal] = useReplicant<number>("faketotal");
  const [dispensing, setDispensing] = React.useState<Donation | undefined>(undefined);
  const [delayedTotal, setDelayedTotal] = React.useState<number>(total ?? 0);
  const totalDisplay = Math.floor(useIncrementNumber(delayedTotal ?? 0));
  const [waterfallSegments, setWaterfallSegments] = React.useState<Array<WaterfallInfo>>([]);
  const [trackingTotal, setTrackingTotal] = React.useState<number>(total ?? 0);

  // this can be buggy but it is necessary in a reset
  React.useEffect(() => {
    if (waterfallSegments.length == 0 && total != undefined) {
        setTrackingTotal(total);
        setDelayedTotal(total);
    }
    if (total != undefined && Math.abs(total - delayedTotal) > 100) {
        setTrackingTotal(total);
        setDelayedTotal(total);
    }
  }, [waterfallSegments.length])

  const yScaleFactor = React.useMemo(() => {
    const target = nodecg.bundleConfig.MOONDUNK_TARGET ?? 2000;
    const minScale = 1;
    const maxScale = 41;
    const amount = delayedTotal ?? 0;
    const ratio = amount / target;
    return Math.max(minScale, Math.min(maxScale, minScale*(1-ratio) + maxScale*ratio))

  }, [delayedTotal])

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

    const newSegment: WaterfallInfo = {
        id: dispensing.id,
        top: 68,
        height: 0,
        expectedAmount: trackingTotal + dispensing.amountDisplay,
    };
    setTrackingTotal((current) => current + dispensing.amountDisplay);


    setWaterfallSegments((current) => [...current, newSegment])
  }, [dispensing?.id])

  const waveBottom = 45 + 22.5 * yScaleFactor;

  React.useEffect(() => {
    const timeout = setTimeout(() => {
        setWaterfallSegments((current) => {
            const newSegments = current.map((segment) => {
                if (segment.id == dispensing?.id) {
                    return {...segment, height: Math.min(segment.height + 2, 1012 - waveBottom)}
                }
                if (segment.top + segment.height < 1078 - waveBottom) {
                    return {...segment, top: Math.max(0, segment.top + 2)}
                }

                const cyclesRemaining = Math.max(Math.floor(segment.height / 2), 1);
                const difference = Math.max(0, segment.expectedAmount - delayedTotal);
                const dAmount = difference / cyclesRemaining;
                setDelayedTotal((current) => Math.min(current + dAmount, total ??0))
                return {
                    ...segment,
                    top: Math.max(0, segment.top + 2),
                    height: Math.max(0, segment.height - 2),
                }
            }); 
            return newSegments.filter((segment) => segment.height != 0);
    })
    }, 5);

    return () => clearTimeout(timeout);
  }, [waterfallSegments, dispensing?.id])



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
        <div style={{
            position: "absolute",
            transformOrigin: "bottom left",
            left: 90,
            bottom: 45,
            width: 100,
            height: 22,
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
        {waterfallSegments.map((segmentInfo) => <div key={`waterfall-segment-${segmentInfo.id}`} style={{
            position: "absolute",
            background: MOONSHOT_EXTRA_LIGHT_BLUE,
            width: 10,
            height: segmentInfo.height,
            top: segmentInfo.top,
            left: 95,
            zIndex: -1,
            transformOrigin: "top left",
        }}/>)}
    </div>
}

render(<App />);