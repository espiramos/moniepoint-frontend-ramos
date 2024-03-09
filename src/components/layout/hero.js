"use client";
import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatedText } from "../ui/AnimatedText";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

function Hero() {
  const firstIconControls = useAnimation();
  const secondIconControls = useAnimation();
  const thirdIconControls = useAnimation();
  const fourthIconControls = useAnimation();
  const heroImageControls = useAnimation();
  const once = true;
  const firstIconRef = useRef(null);
  const secondIconRef = useRef(null);
  const thirdIconRef = useRef(null);
  const fourthIconRef = useRef(null);
  const fourthIconChildOneRef = useRef(null);
  const fourthIconChildTwoRef = useRef(null);
  const heroImageRef = useRef(null);
  const isFirstIconInView = useInView(firstIconRef, { amount: 0.5, once });
  const isSecondIconInView = useInView(secondIconRef, { amount: 0.5, once });
  const isThirdIconInView = useInView(thirdIconRef, { amount: 0.5, once });
  const isFourthIconInView = useInView(fourthIconRef, { amount: 0.5, once });
  const isHeroImageInView = useInView(heroImageRef, { amount: 0.5, once });

  const textAnimationsDuration = 1.5;

  const firstIconAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: "135deg",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: "0deg",
      transition: {
        duration: 1,
      },
    },
  };
  const secondIconAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: "135deg",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: "0deg",
      transition: {
        duration: 1,
      },
    },
  };
  const thirdIconAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const fourthIconAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const fourthIconChildOneAnimation = {
    hidden: {
      height: "100%",
    },
    visible: {
      height: "50%",
      transition: {
        duration: 1,
        delay: textAnimationsDuration + 0.7,
      },
    },
  };
  const fourthIconChildTwoAnimation = {
    hidden: {
      height: "25%",
    },
    visible: {
      height: "100%",
      transition: {
        duration: 1,
        delay: textAnimationsDuration + 0.7,
      },
    },
  };
  const heroImageAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    if (isFirstIconInView) {
      setTimeout(() => {
        firstIconControls.start("visible");
      }, (textAnimationsDuration + 0.3) * 1000 );
       
    } else {
      firstIconControls.start("hidden");
    }
  }, [isFirstIconInView, firstIconControls]);
  useEffect(() => {
    if (isSecondIconInView) {
      setTimeout(() => {
        
        secondIconControls.start("visible");
      }, (textAnimationsDuration + 0.5) * 1000 );
    } else {
      secondIconControls.start("hidden");
    }
  }, [isSecondIconInView, secondIconControls]);
  useEffect(() => {
    if (isThirdIconInView) {
      setTimeout(() => {
        
        thirdIconControls.start("visible");
      }, (textAnimationsDuration) * 1000 );
    } else {
      thirdIconControls.start("hidden");
    }
  }, [isThirdIconInView,thirdIconControls]);
  useEffect(() => {
    if (isHeroImageInView) {
      setTimeout(() => {
        
        heroImageControls.start("visible");
      }, (textAnimationsDuration + 0.3) * 1000 );
    } else {
      heroImageControls.start("hidden");
    }
  }, [isHeroImageInView, heroImageControls]);

  useEffect(() => {
    if (isFourthIconInView) {
      setTimeout(() => {
        
        fourthIconControls.start("visible");
      }, (textAnimationsDuration + 0.7) * 1000 );
    } else {
      fourthIconControls.start("hidden");
    }
  }, [isFourthIconInView, fourthIconControls]);

  return (
    <section
      className={`${urbanist.className}  w-full page-padding min-h-screen flex flex-col justify-center items-center`}
    >
      <div className="hero-content pl-20 py-44 pr-12 flex flex-col w-full flex-nowrap">
        <div className="flex flex-row flex-nowrap justify-end w-full">
          <div className="flex flex-col">
            <div className="flex flex-row ml-16 w-full">
              <div className="flex flex-row h-fit items-center">
                <motion.div
                  ref={firstIconRef}
                  variants={firstIconAnimation}
                  initial="hidden"
                  animate={firstIconControls}
                  aria-hidden
                  className="will-change secondary-circle-icon shadow circle-icon p-10 rounded-full flex flex-row justify-center items-center text-danger"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
                <motion.div
                  ref={secondIconRef}
                  variants={secondIconAnimation}
                  initial="hidden"
                  animate={secondIconControls}
                  aria-hidden
                  className="will-change danger-circle-icon shadow-md -ml-8 circle-icon p-10 rounded-full flex flex-row justify-center items-center text-white bg-danger"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 40 22"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M38 3.43553L24.555 16.9848L15.1538 8.1875L4.42449 19L3 17.5645L15.102 5.36862L24.5032 14.1659L36.5755 2L38 3.43553Z"
                      fill="currentColor"
                    />
                    <path
                      d="M19 7C19 9.20914 17.2091 11 15 11C12.7909 11 11 9.20914 11 7C11 4.79086 12.7909 3 15 3C17.2091 3 19 4.79086 19 7Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8 18C8 20.2091 6.20914 22 4 22C1.79086 22 0 20.2091 0 18C0 15.7909 1.79086 14 4 14C6.20914 14 8 15.7909 8 18Z"
                      fill="currentColor"
                    />
                    <path
                      d="M29 15C29 17.2091 27.2091 19 25 19C22.7909 19 21 17.2091 21 15C21 12.7909 22.7909 11 25 11C27.2091 11 29 12.7909 29 15Z"
                      fill="currentColor"
                    />
                    <path
                      d="M40 4C40 6.20914 38.2091 8 36 8C33.7909 8 32 6.20914 32 4C32 1.79086 33.7909 0 36 0C38.2091 0 40 1.79086 40 4Z"
                      fill="currentColor"
                    />
                  </svg>
                </motion.div>
              </div>
              <AnimatedText
                once
                text="Analytics"
                el="h1"
                className="text-dark will-change heading-text font-medium ml-6 relative relative overflow-hidden w-fit h-fit"
              />
            </div>
            <div className="mt-6 flex -ml-8 flex-row justify-start">
              <AnimatedText
                once
                text="that"
                el="h1"
                className="text-dark will-change text-left heading-text font-medium"
              />
              <AnimatedText
                once
                text="helps"
                el="h1"
                delay={0.5}
                className="text-grayalt will-change text-left heading-text font-medium"
              />
              <AnimatedText
                once
                text="you"
                el="h1"
                delay={1}
                className="text-dark will-change text-left heading-text font-medium"
              />
            </div>
          </div>

          <div className="hero-image-and-icon ml-6 relative flex-auto w-56 h-fit rounded-xl">
            <motion.div
              ref={heroImageRef}
              variants={heroImageAnimation}
              initial="hidden"
              animate={heroImageControls}
              className="w-full will-change h-fit rounded-xl"
            >
              <Image
                src={"/images/laptop-1.png"}
                alt="analytics dashboard mockup"
                height={224}
                width={300}
                sizes="(min-width: 768px) 20rem, 14rem"
                className="rounded-2xl w-full shadow h-full"
                quality={100}
                priority={true}
              />
            </motion.div>

            <motion.div
              ref={thirdIconRef}
              variants={thirdIconAnimation}
              initial="hidden"
              animate={thirdIconControls}
              className="danger-circle-icon will-change absolute shadow-lg -top-4 -left-4 circle-icon p-3 rounded-full flex flex-row justify-center items-center text-white bg-danger"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
          </div>
        </div>

        <div className="flex-row w-full flex-nowrap flex items-center mt-9 justify-end">
          <AnimatedText
            once
            text="shape"
            el="h1"
            noSpace={true}
            className="text-dark will-change heading-text w-fit font-medium"
          />
          <motion.div
            ref={fourthIconRef}
            variants={fourthIconAnimation}
            initial="hidden"
            animate={fourthIconControls}
            className="mx-4 shadow-md circle-icon will-change w-fit p-8 rounded-full flex flex-row justify-center items-center text-dark bg-positive"
          >
            <div className="w-12 h-12 flex flex-center flex-row gap-x-1.5">
              <div className="h-full flex flex-col justify-end">
                <div className="bg-dark rounded-lg h-7 w-1.5"></div>
              </div>
              <motion.div
                variants={fourthIconChildOneAnimation}
                ref={fourthIconChildOneRef}
                className="h-full flex flex-col items-center justify-center"
              >
                <div className="bg-dark rounded-lg h-10 w-1.5"></div>
              </motion.div>
              <motion.div
                variants={fourthIconChildTwoAnimation}
                ref={fourthIconChildTwoRef}
                className="h-full flex flex-col items-center justify-center"
              >
                <div className="bg-dark rounded-lg h-12 w-1.5"></div>
              </motion.div>
            </div>
          </motion.div>
          <AnimatedText
            once
            text="the future"
            el="h1"
            className="text-dark will-change heading-text w-fit font-medium"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
