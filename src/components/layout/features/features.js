"use client";
import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AnimatedTextAlt } from "@/components/ui/AnimatedTextAlt";
import styles from "./features.module.scss";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Features() {
  const [animationsDone, setAnimationsDone] = useState(false)
  const once = true;
  const featuresControl = useAnimation();
  const featuresDivRef = useRef(null);
  const isFeatureDivInView = useInView(featuresDivRef, { amount: 0, once });
  useEffect(() => {
    if (isFeatureDivInView) {
      setTimeout(() => {
        featuresControl.start("visible");
      }, 2000);
    
    } else {
      featuresControl.start("hidden");
    }
  }, [isFeatureDivInView]);

  const devicesControl = useAnimation();
  const devicesDivRef = useRef(null);
  const isDevicesDivInView = useInView(devicesDivRef, { amount: 0, once });
  useEffect(() => {
    if (isDevicesDivInView) {
      setTimeout(() => {
        devicesControl.start("visible");
        setTimeout(() => {
          setAnimationsDone(true)
        }, 3000);
      }, 2000);
      
    } else {
      devicesControl.start("hidden");
    }
  }, [isDevicesDivInView, devicesControl]);

  const ramosControl = useAnimation();
  const ramosDivRef = useRef(null);
  const isRamosDivInView = useInView(ramosDivRef, { amount: 0, once });
  useEffect(() => {
    if (isRamosDivInView) {
      if (isRamosDivInView && animationsDone) {
        setTimeout(() => {
          ramosControl.start({
            opacity: [0,1, 1, 1, 1],
            borderBottomLeftRadius: ["0%","100%", "10%", "0px", "0px"],
            borderBottomRightRadius: ["0%","10%", "100%", "0px", "0px"],
            borderTopRightRadius: ["0%","10%", "50%", "100%", "0%"],
            width: ["0%","10%", "50%", "100%", "100%"],
            height: ["0%","10%", "50%", "100%", "100%"],
          }, {duration: 3});
        }, 500);
      
      }
  
      return () => ramosControl && ramosControl.stop();
    } else {
      ramosControl.start("hidden");
    }
  }, [isRamosDivInView, animationsDone, ramosControl]);

  const featuresList = [
    { label: "Instant Insights" },
    { label: "AI Technology" },
    { label: "Easy Integration" },
  ];

  return (
    <section
      className={`${urbanist.className} overflow-hidden analytics-section relative features-section  min-h-screen`}
    >
      <div className="bg-grid-cover w-full h-3/5 absolute top-0"></div>
      <div className="page-padding-left pt-28  flex flex-col">
        <div
          className="analytics-content pl-12 z-10 flex flex-col flex-nowrap w-full"
          style={{ overflowX: "clip" }}
        >
          <div className="w-full flex flex-row justify-between flex-nowrap">
            <div className="flex w-1/3 flex-col">
              <div className="flex flex-col">
                <AnimatedTextAlt
                  once
                  text="Turn data into real"
                  el="h3"
                  className="text-dark heading-text-3 font-medium"
                />
                <AnimatedTextAlt
                  once
                  text="actions and ideas"
                  el="h3"
                  className="text-dark heading-text-3 font-medium"
                  delay={0.3}
                />
              </div>
              <motion.div
                ref={featuresDivRef}
                animate={featuresControl}
                initial="hidden"
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } },
                  hidden: {},
                }}
                aria-hidden
                className="flex flex-col gap-y-6 mt-20"
              >
                {featuresList.map((feature, index) => (
                  <motion.div
                    key={"feature-item-" + index}
                    variants={{
                      hidden: {
                        y: 400 - index * 50,
                        height: "50%",
                      },
                      visible: {
                        y: 0,
                        height: "100%",
                        transition: {
                          duration: 1,
                          delay: 2,
                        },
                      },
                    }}
                    className="w-80 rounded-3xl border bg-white border-gray border-solid shadow-xl px-6 py-4 flex flex-row flex-nowrap justify-between items-center"
                  >
                    <h6 className="text-dark heading-text-6 font-medium">
                      {feature.label}
                    </h6>
                    <div className="shadow circle-icon p-3 rounded-full flex flex-row justify-center items-center bg-secondary text-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div
              ref={devicesDivRef}
              animate={devicesControl}
              initial="hidden"
              variants={{
                visible: { transition: {staggerChildren: 0.5 } },
                hidden: {},
              }}
              aria-hidden
              className="flex w-2/3 pl-64 flex-row justify-end relative"
            >
              <motion.div
                variants={{
                  hidden: {
                    y: 500,
                  },
                  visible: {
                    y: 0,
                    transition: {
                      duration: 1,
                      delay: 2,
                    },
                  },
                }}
              >
                <figure
                  className={`${styles.ipad} -mr-64 flex flex-row justify-end`}
                >
                  <img alt="desktop mockup" src="/images/dashboard.png" className="w-full h-auto" />
                </figure>
              </motion.div>
              <motion.div
                variants={{
                  hidden: {
                    y: 500,
                  },
                  visible: {
                    y: 0,
                    transition: {
                      duration: 1,
                      delay: 2.5,
                    },
                  },
                }}
                className="absolute left-20 top-10 z-20"
              >
                <div className="frame-base relative">
                  <div className="frame-base-light"></div>
                  <div className="side-button mute"></div>
                  <div className="side-button volume-up"></div>
                  <div className="side-button volume-down"></div>
                  <div className="side-button hold"></div>
                  <div className="stripe top"></div>
                  <div className="stripe bottom"></div>
                  <div className="port"></div>
                  <div className="layer2">
                    <div className="layer2-light"></div>
                    <div className="layer2-light light-right"></div>
                    <div className="screen">
                      <div className="px-0">
                        <img
                          src="/images/dashboard-mobile.png"
                          id="background"
                          alt="mobile mockup"
                        />
                      </div>

                      <div className="mask">
                        <div className="left-pie"></div>
                        <div className="right-pie"></div>
                        <div className="speaker"></div>
                        <div className="camera">
                          <div className="lenz left"></div>
                          <div className="lenz right"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div
            className="w-full flex flex-row  items-center -mt-28  page-padding-right pb-36"
            style={{minHeight: '50vh'}}
          >
            <motion.div
              ref={ramosDivRef}
              animate={ramosControl}
              className="text-nowrap text-left w-0 h-0 overflow-hidden ramos-text font-semibold heading-largest pr-12 relative"
            >
              Ramos
              {/* <div className="w-24 h-24 absolute top-0 bg-positive"></div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
