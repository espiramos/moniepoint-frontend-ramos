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

function Getstarted() {
  const once = true;
  const sectionControl = useAnimation();
  const sectionDivRef = useRef(null);
  const isSectionDivInView = useInView(sectionDivRef, { amount: 0, once });
  useEffect(() => {
    if (isSectionDivInView) {
      sectionControl.start("visible");
    } else {
      sectionControl.start("hidden");
    }
  }, [isSectionDivInView, sectionControl]);
  return (
    <section
      className={`${urbanist.className} getstarted-section  overflow-hidden w-full bg-white page-padding md:pb-12 min-h-screen flex flex-col`}
    >
      <motion.div
        ref={sectionDivRef}
        animate={sectionControl}
        initial="hidden"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.5,
            },
          },
        }}
        aria-hidden
        className="getstarted-content md:px-12 md:pb-12 flex flex-col flex-nowrap w-full"
      >
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              scale: 5,
            },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1,
                ease: "linear",
              },
            },
          }}
          className="flex w-full flex-row flex-center mb-8"
        >
          <div className="flex flex-row flex-center border-2 border-dangeralt border-solid rounded-5xl shadow-xl shadow-danger bg-danger text-white p-8">
            <Image
              alt="brand icon"
              width={50}
              height={50}
              src={process.env.NEXT_PUBLIC_IMAGE_URL+"/brand-icon-red.png"}
            />
          </div>
        </motion.div>
        <div className="w-full flex flex-wrap my-12 md:my-0 flex-row flex-center">
          <AnimatedText
            once
            text="Get"
            el="h1"
            delay={0.5}
            className="text-dark text-nowrap text-7xl md:text-9xl text-center font-medium md:mb-8 relative overflow-hidden w-fit h-fit"
          />
          <AnimatedText
            once
            text="started"
            el="h1"
            delay={1}
            noSpace={true}
            className="text-dark text-nowrap text-7xl md:text-9xl text-center font-medium md:mb-8 relative overflow-hidden w-fit h-fit"
          />
        </div>
        <motion.h6
          variants={{
            hidden: {
              opacity: 0,
              y: 200,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            },
          }}
          className="hidden md:block text-graydeep z-10 text-2xl text-center mb-12"
        >
          Turn information into advantage! Start using
          <br />
          Ramos today. Sign up for a free trial
        </motion.h6>
        <motion.h6
          variants={{
            hidden: {
              opacity: 0,
              y: 200,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            },
          }}
          className="md:hidden text-graydeep z-10 text-2xl text-center mb-12"
        >
          Turn information into advantage! Start using
          Ramos today. Sign up for a free trial
        </motion.h6>
        <motion.div
          variants={{
            hidden: {
              scale: 0,
            },
            visible: {
              scale: 1,
              transition: {
                duration: 1,
                type: "tween",
              },
            },
          }}
          className="flex flex-row items-center justify-center w-full gap-x-3 flex-nowrap "
        >
          <button
            type="button"
            className="text-dark bg-secondary w-1/2 md:w-fit transition ease-in-out duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-xl active:shadow-inner font-semibold rounded-xl text-md px-4 md:px-8 py-4 text-center"
          >
            Request a demo
          </button>
          <button
            type="button"
            className="text-white bg-danger w-1/2 md:w-fit  transition ease-in-out duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-xl active:shadow-inner font-medium rounded-xl text-md px-4 md:px-8 py-4 text-center"
          >
            Start for free
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Getstarted;
