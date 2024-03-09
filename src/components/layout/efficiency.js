"use client";
import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";
import { Urbanist } from "next/font/google";
import { AnimatedText } from "../ui/AnimatedText";
const urbanist = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
function Efficiency() {
  const once = true;
  const firstIconRef = useRef(null);
  const secondIconRef = useRef(null);
  const analyticsRef = useRef(null);
  const analyticsTextRef = useRef(null);
  const ctaRef = useRef(null);
  const textRef = useRef(null);
  const firstIconControls = useAnimation();
  const secondIconControls = useAnimation();
  const analyticsControls = useAnimation();
  const analyticsTextControls = useAnimation();
  const ctaControls = useAnimation();
  const textControls = useAnimation();
  const isFirstIconInView = useInView(firstIconRef, { amount: 0.5, once });
  const isSecondIconInView = useInView(secondIconRef, { amount: 0.5, once });
  const analyticsInView = useInView(analyticsRef, { amount: 0.5, once });
  const ctaInView = useInView(ctaRef, { amount: 0.5, once });
  const textInView = useInView(ctaRef, { amount: 0.5, once });
  const analyticsTextView = useInView(ctaRef, { analyticsTextRef: 0.5, once });

  const textAnimationsDuration = 1;
  const firstIconAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: textAnimationsDuration + 0.5,
        ease: "linear"
      },
    },
  };
  const secondIconAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: textAnimationsDuration + 0.3,
        ease: "linear"
      },
    },
  };
  const analyticsAnimation = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
        delay: textAnimationsDuration + 0.3,
        ease: "linear"
      },
    },
  };
  useEffect(() => {
    if (analyticsTextView) {
      analyticsTextControls.start("visible");
    } else {
      analyticsTextControls.start("hidden");
    }
  }, [analyticsTextView]);
  useEffect(() => {
    if (isFirstIconInView) {
      firstIconControls.start("visible");
    } else {
      firstIconControls.start("hidden");
    }
  }, [isFirstIconInView]);
  useEffect(() => {
    if (isSecondIconInView) {
      secondIconControls.start("visible");
    } else {
      secondIconControls.start("hidden");
    }
  }, [isSecondIconInView]);
  useEffect(() => {
    if (analyticsInView) {
      analyticsControls.start("visible");
    } else {
      analyticsControls.start("hidden");
    }
  }, [analyticsInView]);
  useEffect(() => {
    if (ctaInView) {
      setTimeout(() => {
        ctaControls.start("visible");
      }, 2000);
    
    } else {
      ctaControls.start("hidden");
    }
  }, [ctaInView]);
  useEffect(() => {
    if (textInView) {
      setTimeout(() => {
        textControls.start("visible");
      }, 2000);
     
    } else {
      textControls.start("hidden");
    }
  }, [textInView]);
  return (
    <section
      className={`${urbanist.className} efficiency-section w-full bg-white page-padding py-28 min-h-screen flex flex-col`}
    >
      <div className="efficiency-content py-28 px-12 flex flex-col flex-nowrap w-full">
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-row items-center">
            <AnimatedText
              once
              text="Maximize"
              el="h1"
              className="text-dark heading-text text-left font-medium text-dark relative overflow-hidden w-fit h-fit"
            />
            <AnimatedText
              once
              text="efficiency"
              el="h1"
              delay={1}
              className="text-grayalt heading-text text-left font-medium text-dark relative overflow-hidden w-fit h-fit"
            />
          </div>
          <AnimatedText
            once
            text="with our intuitive"
            el="h1"
            delay={0.3}
            className="text-dark heading-text text-left font-medium text-dark relative overflow-hidden w-fit h-fit"
          />
        </div>
        <div className="flex flex-row mt-12 w-full items-center border-b-2 border-solid border-secondary pb-16 justify-between">
          <div className="flex flex-row h-fit items-center">
            <motion.div
              ref={firstIconRef}
              variants={firstIconAnimation}
              initial="hidden"
              animate={firstIconControls}
              aria-hidden
              className="secondary-circle-icon relative shadow-md z-10 circle-icon p-8 rounded-full flex flex-col justify-center items-center"
            >
              <div className="w-3/4 absolute icon-border-bg"></div>
              <div className="rounded-xl bg-danger z-10 text-white p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 feather feather-activity"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
            </motion.div>
            <motion.div
              ref={secondIconRef}
              variants={secondIconAnimation}
              initial="hidden"
              animate={secondIconControls}
              aria-hidden
              className=" shadow -ml-4 circle-icon p-6 rounded-full flex flex-col justify-center items-center text-dark bg-positive"
            >
              <span className="text-2xl font-medium text-center">45%</span>
              <span className="text-xs text-center font-medium">
                System grow
                <br />
                faster
              </span>
            </motion.div>
          </div>

          <motion.div
            ref={analyticsRef}
            variants={analyticsAnimation}
            initial="hidden"
            animate={analyticsControls}
            aria-hidden
            className="w-2/5 flex-nowrap py-6 overflow-clip px-4 rounded-full bg-positive"
          >
            <motion.div
             ref={analyticsTextRef}
             initial="hidden"
             animate={analyticsTextControls}
             aria-hidden
              variants={{
                hidden: {
                  x: "0",
                },
                visible: {
                  x: "-120%",
                  transition: {
                    duration: 120,
                    repeat: true,
                    ease: "linear"
                  },
                },
              }}
              className="text-dark inner-shadow heading-text text-nowrap font-medium flex-nowrap w-fit"
            >
              analytics services analytics services analytics services analytics
              services analytics services analytics services
            </motion.div>
          </motion.div>
        </div>
        <div className="flex flex-row mt-12 w-full items-center justify-between">
          <motion.div
            ref={textRef}
            variants={{
              hidden: {
                y: 100,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                },
              },
            }}
            initial="hidden"
            animate={textControls}
            aria-hidden
            className="flex flex-row items-center"
          >
            <p className="text-dark text-sm font-medium">
              Explore traffic sources, page behaviour, conversions and more to
              gain insight
              <br />
              into your audience. With us, your business doesn't just adopt - it
              evolves
            </p>
          </motion.div>

          <motion.div
            ref={ctaRef}
            variants={{
              visible: { transition: { staggerChildren: 0 } },
              hidden: {},
            }}
            initial="hidden"
            animate={ctaControls}
            aria-hidden
            className="flex-row items-center justify-end flex-nowrap "
          >
            <motion.button
              type="button"
              variants={{
                hidden: {
                  scale: 0,
                },
                visible: {
                  scale: 1,
                  transition: {
                    duration: 1,
                  },
                },
              }} 
              className="text-dark bg-secondary transition ease-in-out duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-xl active:shadow-inner font-medium rounded-xl text-sm px-8 py-3 text-center"
            >
              Request a demo
            </motion.button>
            <motion.button
              type="button"
              variants={{
                hidden: {
                  scale: 0,
                },
                visible: {
                  scale: 1,
                  transition: {
                    duration: 1,
                  },
                },
              }} 
              className="ml-3 text-white bg-danger transition ease-in-out duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-xl active:shadow-inner font-medium rounded-xl text-sm px-8 py-3 text-center"
            >
              Start for free
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Efficiency;
