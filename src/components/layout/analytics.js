"use client";
import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import LineChart from "@/components/ui/linechart";
import { AnimatedTextAlt } from "../ui/AnimatedTextAlt";
import { Counter } from "../ui/Counter";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

function Analytics() {
  const once = true;
  const firstDivControl = useAnimation();
  const secondDivControl = useAnimation();
  const thirdDivControl = useAnimation();
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);
  const thirdDivRef = useRef(null);
  const isFirstDivInView = useInView(secondDivRef, { amount: 0, once });
  const isSecondDivInView = useInView(secondDivRef, { amount: 0, once });
  const isThirdDivInView = useInView(thirdDivRef, { amount: 0, once });

  const rightDarkCardControl = useAnimation();
  const rightDarkCardRef = useRef(null);
  const isRightDarkCardInView = useInView(rightDarkCardRef, {
    amount: 0,
    once,
  });

  useEffect(() => {
    if (isRightDarkCardInView) {
      rightDarkCardControl.start("visible");
    } else {
      rightDarkCardControl.start("hidden");
    }
  }, [isRightDarkCardInView, rightDarkCardControl]);

  const leftCardControl = useAnimation();
  const leftCardRef = useRef(null);
  const isLeftCardInView = useInView(leftCardRef, {
    amount: 0,
    once,
  });

  useEffect(() => {
    if (isLeftCardInView) {
      leftCardControl.start("visible");
    } else {
      leftCardControl.start("hidden");
    }
  }, [isLeftCardInView, leftCardControl]);

  useEffect(() => {
    if (isSecondDivInView) {
      secondDivControl.start("visible");
    } else {
      secondDivControl.start("hidden");
    }
  }, [isSecondDivInView, secondDivControl]);
  useEffect(() => {
    if (isFirstDivInView) {
      firstDivControl.start("visible");
    } else {
      firstDivControl.start("hidden");
    }
  }, [isFirstDivInView, firstDivControl]);
  useEffect(() => {
    if (isThirdDivInView) {
      thirdDivControl.start("visible");
    } else {
      thirdDivControl.start("hidden");
    }
  }, [isThirdDivInView, thirdDivControl]);

  return (
    <section
      className={`${urbanist.className} analytics-section page-padding py-28 min-h-screen flex flex-col`}
    >
      <div className="analytics-content px-12 flex flex-col flex-nowrap w-full ">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <AnimatedTextAlt
              once
              text="Your key to strategic"
              el="h3"
              className="text-dark heading-text-3 font-medium"
            />
            <AnimatedTextAlt
              once
              text="success through analytics"
              el="h3"
              className="text-dark heading-text-3 font-medium"
              delay={0.3}
            />
          </div>

          <motion.div
            ref={firstDivRef}
            animate={firstDivControl}
            initial="hidden"
            variants={{
              hidden: {
                y: 100,
                opacity: 1,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  staggerChildren: 0.1,
                },
              },
            }}
            aria-hidden
            className="flex flex-col justify-center pr-12 justify-end"
          >
            <AnimatedTextAlt
              once
              text="Ready for exciting, instantaneous,"
              el="h6"
              className="text-dark heading-text-6 font-regular"
              fade={true}
            />
            <AnimatedTextAlt
              once
              text="all-accessible insights in real-time?"
              el="h6"
              className="text-dark heading-text-6 font-regular"
              delay={0.2}
              fade={true}
            />
          </motion.div>
        </div>

        <motion.div
          ref={secondDivRef}
          animate={secondDivControl}
          initial="hidden"
          variants={{
            hidden: {
              y: 200,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            },
          }}
          aria-hidden
          className="flex flex-row items-center w-full h-96 justify-between mt-16 flex-nowrap gap-x-3"
        >
          <motion.div
            ref={leftCardRef}
            animate={leftCardControl}
            initial="hidden"
            variants={{
              visible: { transition: { staggerChildren: 0.5 } },
              hidden: {},
            }}
            aria-hidden
            className="w-full h-full md:w-3/5 flex flex-row pl-8 pt-8 justify-between gap-x-2 bg-white rounded-3xl border-2 border-gray border-solid shadow-xl shadow-gray-200"
          >
            <div className="w-1/2 overflow-hidden flex flex-col pb-8 justify-between">
              <motion.span
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: 0,
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 1,
                      delay: 1,
                    },
                  },
                }}
                className="widget-badge rounded-xl px-4 py-2 w-fit text-sm font-semibold shadow-xl text-dark bg-positive"
              >
                Setting up reports
              </motion.span>
              <motion.div
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
                      delay: 1,
                    },
                  },
                }}
                className="flex flex-col"
              >
                <h6 className="text-dark text-3xl font-medium">
                  Fast and easy access
                  <br />
                  to analytics
                </h6>
                <p
                  className="text-left body-text-1 mt-4"
                  style={{ color: "#999" }}
                >
                  One platform is a comprehensive system of solutions that will
                  be the first step towards digitization of your business
                </p>
              </motion.div>
            </div>
            <div className="w-1/2 overflow-hidden border-t-2 border-l-2 border-gray border-solid rounded-tl-2xl shadow-sm flex flex-col justify-between py-4 px-4">
              <motion.p
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
                      delay: 1,
                    },
                  },
                }}
                className="text-left body-text-1 font-semibold text-dark"
              >
                Sales statistic
              </motion.p>
              <motion.div
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
                      delay: 1.3,
                    },
                  },
                }}
                className="flex flex-row justify-between items-center flex-nowrap gap-x-3"
              >
                <div className="danger-circle-icon shadow-md circle-icon p-5 rounded-full flex flex-row justify-center items-center text-white bg-danger">
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
                      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-center gap-y-1">
                  <div>
                    <AnimatedTextAlt
                      once
                      text="Total profit"
                      el="p"
                      className="widget-text-sm font-medium w-full text-graydeep"
                    />
                  </div>
                  <span className="font-medium text-dark">
                    <span className="text-lg mr-1">$</span>{" "}
                    <span className="text-2xl">264,2K</span>
                  </span>
                </div>
                <div
                  className="flex flex-col justify-center p-3 gap-y-2 rounded-xl"
                  style={{ backgroundColor: "#f6f6f6" }}
                >
                  <span className="widget-text-sm font-semibold w-full text-dark">
                    Visitors
                  </span>
                  <div
                    className="w-full h-1 mb-1 rounded-2xl"
                    style={{ backgroundColor: "#ccc" }}
                  >
                    <motion.div
                      variants={{
                        hidden: {
                          width: 0,
                        },
                        visible: {
                          width: "50%",
                          transition: {
                            duration: 1,
                            delay: 2,
                          },
                        },
                      }}
                      className="bg-greenalt  h-1 rounded-2xl"
                    ></motion.div>
                  </div>
                  <div className="flex flex-row relative">
                    <span className="text-2xl font-medium text-dark w-full mr-2">
                      <Counter from={21} to={51} unit={"K"} duration={1} />
                    </span>

                    <div className="w-full flex flex-row justify-end -mt-4 items-center">
                      <div className="shadow-md circle-icon w-fit p-1 rounded-full flex flex-row justify-center items-center text-white bg-greenalt">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-2 h-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                          />
                        </svg>
                      </div>
                      <span className="text-greenalt text-xs ml-1">+14%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
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
                      delay: 1.5,
                    },
                  },
                }}
                className="border flex flex-row pb-2 relative flex-center shadow-sm border-gray border-solid rounded-xl h-36"
              >
                <LineChart />
                <motion.span
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
                        delay: 2,
                      },
                    },
                  }}
                  className="text-dark font-semibold text-sm absolute top-2 left-4"
                >
                  Visit statistics
                </motion.span>
                <motion.div
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
                        delay: 2.2,
                      },
                    },
                  }}
                  className="absolute bottom-2 w-36 right-3 rounded-xl bg-danger text-white py-3 px-3 flex flex-col"
                >
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-white text-sm mr-3">Rate</span>
                    <div className="text-white ">
                      <svg
                        className="w-4 h-6"
                        viewBox="0 0 21 18"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.88083 2.59053L1.49417 7.86113C1.07095 8.51978 1.07095 9.3648 1.49417 10.0235L4.88083 15.294C5.24879 15.8667 5.88274 16.2129 6.56342 16.2129L13.9156 16.2129C14.5962 16.2129 15.2302 15.8667 15.5981 15.294L18.9848 10.0234C19.408 9.3648 19.408 8.51978 18.9848 7.86113L15.5981 2.59053C15.2302 2.01788 14.5962 1.67169 13.9156 1.67169L6.56342 1.67169C5.88274 1.67169 5.24879 2.01788 4.88083 2.59053ZM0.652878 7.32055C0.0180505 8.30853 0.0180509 9.57606 0.652878 10.564L4.03954 15.8346C4.59148 16.6936 5.5424 17.2129 6.56342 17.2129L13.9156 17.2129C14.9366 17.2129 15.8875 16.6936 16.4394 15.8346L19.8261 10.564C20.4609 9.57606 20.4609 8.30852 19.8261 7.32055L16.4394 2.04996C15.8875 1.19098 14.9366 0.671691 13.9156 0.671691L6.56342 0.671692C5.5424 0.671692 4.59148 1.19098 4.03954 2.04996L0.652878 7.32055Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.73507 4.57607C7.96924 4.42971 8.27771 4.5009 8.42407 4.73507L13.4241 12.7351C13.5704 12.9692 13.4992 13.2777 13.2651 13.4241C13.0309 13.5704 12.7224 13.4992 12.5761 13.2651L7.57607 5.26507C7.42971 5.0309 7.5009 4.72242 7.73507 4.57607Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="mt-1 text-white w-full flex flex-row flex-start items-center">
                    <span className="mt-1 text-white">+</span>
                    <span className="mt-1 ml-1 text-xl ">
                      <Counter from={10} to={58} unit={"%"} duration={0.5}/>
                    </span>
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          <div className="w-full px-8 py-6 h-full md:w-2/5 bg-dark rounded-3xl shadow-xl shadow-gray-200 flex flex-col justify-center items-center">
            <motion.div
              ref={rightDarkCardRef}
              animate={rightDarkCardControl}
              initial="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0 } },
                hidden: {},
              }}
              aria-hidden
              className="flex flex-row items-center justify-center flex-nowrap gap-x-2"
            >
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
                    },
                  },
                }}
                className="rounded-3xl w-40 h-40 py-5 analytics-widget-card-inner shadow-[-1px_0px_2px_0px_#413F3F] items-center justify-between"
              >
                <div className="text-positive">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                    />
                  </svg>
                </div>
                <div className="flex flex-row flex-center">
                  <Image
                    src={"/images/female-avatar.png"}
                    width={50}
                    height={50}
                    alt="avatar"
                    quality={100}
                    className="rounded-full border border-solid border-dark"
                  />
                  <Image
                    src={"/images/male-avatar.png"}
                    width={50}
                    height={50}
                    alt="avatar"
                    quality={100}
                    className="rounded-full border border-solid border-dark -ml-1"
                  />
                </div>
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
                className="rounded-3xl w-40 h-40 py-5 analytics-widget-card-inner shadow-[-1px_0px_2px_0px_#413F3F] items-center justify-between"
              >
                <div className="flex flex-col w-full h-full justify-between pl-8 pr-4">
                  <span className="text-sm text-white w-full">
                    Transactions
                  </span>
                  <div className="w-full flex flex-row justify-end items-center">
                    <div className="shadow-md circle-icon w-fit p-1 rounded-full flex flex-row justify-center items-center text-white bg-greenalt">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                        />
                      </svg>
                    </div>
                    <span className="text-greenalt percentage ml-1">+14%</span>
                  </div>
                  <span className="text-5xl w-full">
                    <Counter from={21} to={43} unit={"K"} />
                  </span>
                </div>
              </motion.div>
            </motion.div>
            <h6 className="text-secondary text-3xl font-medium mt-10 text-center">
              Widget control
            </h6>
            <p
              className="text-center body-text-1 mt-3"
              style={{ color: "#999" }}
            >
              Reports provide a comprehensive overview of important aspects of
              web analytics
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={thirdDivRef}
          animate={thirdDivControl}
          initial="hidden"
          variants={{
            hidden: {
              y: 50,
              opacity: 0.5,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
              },
            },
          }}
          className="w-full flex flex-row mt-16 flex-center"
        >
          <p className="text-dark text-2xl font-medium">
            Up to
            <span className="heading-text ml-1 text-dark font-medium">45%</span>
          </p>
          <p className="text-dark text-lg font-medium ml-6">
            Increase your efficiency by up to 45%. Unique <br />
            algorithms provide insights from data, reduce time for analysis
            <br />
            and save time for making important, informed decisions
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Analytics;
