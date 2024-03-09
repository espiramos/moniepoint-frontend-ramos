"use client";
import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  weight: ["200","300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const AnimatedTextAlt = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  repeatDelay,
  delay,
  fade
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  const animation = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity:1,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      if (delay) {
        setTimeout(() => {
          show();
        }, delay * 1000);
      } else {
        show();
      }
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView, controls, delay, repeatDelay]);

  return (
    <motion.div ref={ref}  className={`${urbanist.className} relative overflow-hidden w-fit h-fit`}>
      <span className="sr-only">{text}</span>
      <motion.div
        animate={controls}
        variants={animation}
        initial="hidden"
        aria-hidden
        className={`${className} will-change`}
      >
        {text}
      </motion.div>
    </motion.div>
  );
};
