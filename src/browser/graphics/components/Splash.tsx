import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";

export default function Splash({active}: {active: boolean})  {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const quantityDyn = useMemo(() => {
    return active ? 5 : 0;
  }, [active])

  const options: ISourceOptions = useMemo(
    () => ({
  backgroundMode: {
    enable: true
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 0
    },
    bounce: {
      vertical: {
        value: 1
      }
    },
    color: {
      value: "#5bc0eb"
    },
    collisions: {
      enable: false
    },
    life: {
      duration: {
        sync: true,
        value: 2
      },
      count: 1
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 30,
      random: {
        enable: true,
        minimumValue: 1
      }
    },
    move: {
      enable: true,
      gravity: {
        enable: true
      },
      angle: {
        value: 30,
        offset: 0,
      },
      speed: 5,
      outModes: {
        bottom: OutMode.bounce,
        top: OutMode.none,
        default: OutMode.destroy,
      },
      trail: {
        enable: true,
        fillColor: "#000000",
        length: 10
      }
    }
  },
  detectRetina: true,
  background: {
    color: "#000"
  },
  emitters: {
    direction: MoveDirection.top,
    life: {
      count: 0,
      duration: 0,
      delay: 0
    },
    position: {
      x: 50,
      y: 80
    },
    rate: {
      delay: 0.1,
      quantity: quantityDyn,
    },
    size: {
      width: 5,
      height: 0
    }
  }
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        style={{background: "red", minHeight: "100vh"}}
      />
    );
  }

  return <></>;
    
}