"use client";
import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import { AnimatedText } from "../ui/AnimatedText";
import { Counter } from "../ui/Counter";
const urbanist = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
import { CardStack } from "../ui/CardStack";
import { cn } from "../../../utils/cn";
function CardStackDemo() {
  return (
    <div className="h-full flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}
// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    heading: "Insights",
  },
  {
    id: 1,
    heading: "Finance reports",
  },
  {
    id: 2,
    empty: true,
  },
];

function Benefits() {
  const once = true;
  const leftControl = useAnimation();
  const leftDivRef = useRef(null);
  const isLeftDivInView = useInView(leftDivRef, { amount: 0, once });
  useEffect(() => {
    if (isLeftDivInView) {
      leftControl.start("visible");
    } else {
      leftControl.start("hidden");
    }
  }, [isLeftDivInView, leftControl]);
  const rightControl = useAnimation();
  const rightDivRef = useRef(null);
  const isRightDivInView = useInView(rightDivRef, { amount: 0, once });
  useEffect(() => {
    if (isRightDivInView) {
      rightControl.start("visible");
    } else {
      rightControl.start("hidden");
    }
  }, [isRightDivInView, rightControl]);
  const progressControl = useAnimation();
  const progressDivRef = useRef(null);
  const isProgressDivInView = useInView(progressDivRef, { amount: 0, once });
  useEffect(() => {
    if (isProgressDivInView) {
      progressControl.start("visible");
    } else {
      progressControl.start("hidden");
    }
  }, [isProgressDivInView, progressControl]);
  return (
    <section
      className={`${urbanist.className} benefits-section w-full bg-white page-padding py-28 min-h-screen flex flex-col`}
    >
      <div className="benefits-content px-12 py-28 flex flex-col flex-nowrap w-full">
        <div className="flex flex-col">
          <div className="w-full flex flex-row items-center">
            <AnimatedText
              once
              text="We give you full"
              el="h1"
              className="text-dark heading-text text-left font-medium text-dark relative overflow-hidden w-fit h-fit"
            />
          </div>
          <div className="w-full flex flex-row items-center flex-wrap">
            <AnimatedText
              once
              text="control"
              el="h1"
              className="text-grayalt heading-text text-left font-medium text-dark relative overflow-hidden w-fit h-fit"
            />
            <AnimatedText
              once
              text="over"
              el="h1"
              delay={0.5}
              className="text-dark heading-text text-left font-medium text-dark relative overflow-hidden w-fit h-fit"
            />
            <AnimatedText
              once
              text="your"
              delay={1}
              el="h1"
              className="text-dark heading-text text-left font-medium text-dark relative overflow-hidden w-fit h-fit"
            />
            <AnimatedText
              once
              text="data"
              delay={1.5}
              el="h1"
              className="text-dark heading-text text-left font-medium text-dark relative overflow-hidden w-fit h-fit"
            />
          </div>
        </div>
        <div className="w-full justify-between items-center mt-20 flex flex-row gap-x-3">
          <motion.div
            ref={leftDivRef}
            animate={leftControl}
            initial="hidden"
            variants={{
              hidden: {
                y: 400,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 2,
                  staggerChildren: 0.5,
                },
              },
            }}
            aria-hidden
            className="w-1/2 benefits-card border shadow-xl overflow-hidden border-gray border-solid rounded-3xl relative"
          >
            <div className="w-full absolute top-0 grid-lines h-full"></div>
            <div className="bg-grid-cover-invert w-full h-1/2 absolute bottom-0"></div>
            <div className="py-8 px-12 flex w-full flex-col h-full">
              <div className="flex flex-row flex-center px-6">
                {/* inner cards */}
                <motion.div
                  variants={{
                    hidden: {
                      x: 100,
                      opacity: 0,
                    },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 2,
                        staggerChildren: 0.5,
                      },
                    },
                  }}
                  className="bg-white border border-gray border-solid shadow-lg z-10 rounded-2xl w-1/2 h-64 py-6 px-12 flex flex-col flex-center"
                >
                  <span className="text-sm w-full text-dark font-semibold text-center mb-4">
                    Conversion rate
                  </span>
                  <div className="text-dark relative rounded-2xl flex flex-row items-end flex-nowrap relative">
                    <motion.div
                      variants={{
                        hidden: {
                          width: "0%",
                        },
                        visible: {
                          width: "100%",
                          transition: {
                            duration: 2,
                            delay: 0.5
                          },
                        },
                      }}
                      className="absolute top-0 w-full  rounded-2xl h-full bg-positive"
                    ></motion.div>
                    <div className="w-full h-full py-1 px-6 relative">
                      <span className="widget-text-main font-medium">
                        2,3<span className="text-3xl font-medium">%</span>
                      </span>
                      <motion.div
                        variants={{
                          hidden: {
                            opacity: 0,
                            scale: 0,
                          },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                              duration: 2,
                              delay: 0.5
                            },
                          },
                        }}
                        className="shadow z-20 circle-icon p-2 absolute -top-3 -left-3 rounded-full flex flex-row justify-center bg-secondary"
                      >
                        <div className="text-dark bg-white rounded-full p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-3 h-3"
                          >
                            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <p className="text-sm w-full text-graydeep mt-4 font-medium text-center">
                    Percentage of <br /> website visitors
                  </p>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: {
                      x: -100,
                      opacity: 0,
                    },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 2,
                      },
                    },
                  }}
                  className="bg-white border -ml-6 -mb-16 border-gray border-solid shadow-lg z-10 rounded-2xl w-1/2 h-64 px-4 pt-6 flex flex-col flex-center"
                >
                  <span className="text-sm w-full text-graydeep font-medium text-left mb-2">
                    Sales revenue
                  </span>
                  <span className="text-sm w-full text-xl flex flex-row items-center text-dark font-medium text-left mb-5">
                    $
                    <span className="text-2xl ml-1">
                      <Counter
                        from={0}
                        to={131}
                        unit={",2k"}
                        delay={1}
                        duration={2}
                      />
                    </span>
                  </span>
                  <motion.div
                    ref={progressDivRef}
                    animate={progressControl}
                    initial="hidden"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 1,
                          delay: 1,
                        },
                      },
                    }}
                    aria-hidden
                    className="flex flex-row w-full mb-4 justify-between items-center flex-nowrap gap-x-1"
                  >
                    <div
                      className="w-1/3 h-1.5 rounded-2xl"
                      style={{ backgroundColor: "#ccc" }}
                    >
                      <motion.div
                        variants={{
                          hidden: {
                            width: 0,
                          },
                          visible: {
                            width: "100%",
                            transition: {
                              duration: 1,
                            },
                          },
                        }}
                        className="bg-greenalt w-full h-1.5 rounded-full"
                      ></motion.div>
                    </div>
                    <div
                      className="w-1/3 h-1.5 rounded-full"
                      style={{ backgroundColor: "#ccc" }}
                    >
                      <motion.div
                        variants={{
                          hidden: {
                            width: 0,
                          },
                          visible: {
                            width: "100%",
                            transition: {
                              duration: 1,
                              delay: 1,
                            },
                          },
                        }}
                        className="bg-positive w-full h-1.5 rounded-full"
                      ></motion.div>
                    </div>
                    <div
                      className="w-1/3 h-1.5 rounded-full"
                      style={{ backgroundColor: "#ccc" }}
                    >
                      <motion.div
                        variants={{
                          hidden: {
                            width: 0,
                          },
                          visible: {
                            width: "100%",
                            transition: {
                              duration: 1,
                              delay: 2,
                            },
                          },
                        }}
                        className="bg-greenalt w-full h-1.5 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                  <div className="flex flex-col w-full border-b border-solid border-gray">
                    <div className="flex flex-row justify-between items-center mb-3 flex-nowrap">
                      <div className="flex flex-row items-center flex-nowrap">
                        <Image
                          src={"/images/male-avatar.png"}
                          width={25}
                          height={25}
                          alt="avatar"
                          className="rounded-full mr-2"
                        />
                        <span className="text-xs text-graydeep font-medium text-left">
                          Min. price
                        </span>
                      </div>
                      <span className="text-sm text-dark font-semibold text-right">
                        1,200 $
                      </span>
                    </div>
                    <div className="flex flex-row justify-between items-center mb-5 flex-nowrap">
                      <div className="flex flex-row items-center flex-nowrap">
                        <Image
                          src={"/images/female-avatar.png"}
                          width={25}
                          height={25}
                          alt="avatar"
                          className="rounded-full mr-2"
                        />
                        <span className="text-xs text-graydeep font-medium text-left">
                          Max. price
                        </span>
                      </div>
                      <span className="text-sm text-dark font-semibold text-right">
                        2,320 $
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between w-full mt-4 items-center mb-4 flex-nowrap">
                    <span className="text-xs text-graydeep font-medium text-left">
                      Engagement rate
                    </span>
                    <span className="text-sm text-dark font-semibold text-right">
                      47,84%
                    </span>
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-row flex-center mt-16">
                <h6 className="text-dark z-10 text-3xl font-medium text-center">
                  Improved customer service
                </h6>
              </div>
              <div className="flex flex-row flex-center">
                <p className="text-dark z-10 text-center text-lg mt-3">
                  Analytics helps optimize service processes by
                  <br />
                  providing information on how to improve interactions
                  <br />
                  with customers and increase their satisfaction.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={rightDivRef}
            animate={rightControl}
            initial="hidden"
            variants={{
              hidden: {
                y: 400,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 2,
                  staggerChildren: 0.5,
                  delay: 0.5,
                },
              },
            }}
            aria-hidden
            className="w-1/2 benefits-card border shadow-xl overflow-hidden border-gray border-solid rounded-3xl relative"
          >
            <div className="w-full absolute top-0 grid-lines h-full"></div>
            <div className="bg-grid-cover-invert w-full h-1/2 absolute bottom-0"></div>
            <div className="py-8 px-12 flex w-full flex-col h-full">
              <div className="flex flex-row h-64 flex-center mt-12">
                {/* inner cards */}
                <CardStackDemo />
              </div>
              <div className="flex flex-col z-10 w-full bg-secondaryalt">
              <div className="flex flex-row flex-center mt-4">
                <h6 className="text-dark z-10 text-3xl font-medium text-center">
                  Monitoring key indicators
                </h6>
              </div>
              <div className="flex flex-row flex-center">
                <p className="text-dark z-10 text-center text-lg mt-4">
                  Analytics platforms allow businesses to track
                  <br />
                  KPIs, an important tool for measuring success
                  <br />
                  and achieving goals.
                </p>
              </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
