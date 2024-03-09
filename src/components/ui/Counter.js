import { animate, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  weight: ["200","300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export function Counter({ from, to, unit, delay, duration = 0 }) {
  const once = true;
  const ref = useRef();
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    const node = ref.current;
    let controls;
    if (isInView) {
      controls = animate(from, to, {
        duration: 1+duration,
        delay: delay || 0,
        onUpdate(value) {
          node.textContent = `${parseInt(value)}${unit && unit}`;
        },
      });
    }

    return () => controls && controls.stop();
  }, [isInView]);

  return <p className={urbanist.className}  ref={ref} />;
}
