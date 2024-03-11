"use client";
import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";
import { AnimatedText } from "../ui/AnimatedText";
import Image from "next/image";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const links = [
  {
    label: "About",
    to: "#",
  },
  {
    label: "Why Us",
    to: "#",
  },
  {
    label: "Platform",
    to: "#",
  },
  {
    label: "Pricing",
    to: "#",
  },
  {
    label: "Contacts",
    to: "#",
  },
];
const addresses = [
  {
    city: "Warrensville heights",
    line1: "14418 Vineyard Drive, NC",
    zip: "44128",
  },
  {
    city: "Saint Louis",
    line1: "1366 Penn Street",
    zip: "63101",
  },
];
function Footer() {
  const animation = {
    hidden: {
      y: 140,
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const once = true;
  const firstControl = useAnimation();
  const firstDivRef = useRef(null);
  const isFirstDivInView = useInView(firstDivRef, { amount: 0, once });
  useEffect(() => {
    if (isFirstDivInView) {
      firstControl.start("visible");
    } else {
      firstControl.start("hidden");
    }
  }, [isFirstDivInView, firstControl]);


  const controls = useAnimation();
  const textArray = ["ramos"];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start("visible");
    };

    if (isInView) {
      setTimeout(() => {
        show();
      }, 2000);
       
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView, controls]);
  return (
    <footer
      className={`${urbanist.className} getstarted-section w-full bg-dark pt-28 min-h-screen flex flex-col`}
    >
      <div className="getstarted-content px-8 md:px-12 page-container flex flex-col justify-center flex-nowrap w-full">
        <motion.div
          ref={firstDivRef}
          animate={firstControl}
          initial="hidden"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0,
              },
            },
          }}
          aria-hidden
          className=" w-full flex flex-col  justify-between"
        >
          <div className="flex w-full flex-col md:flex-row md:items-center overflow-hidden h-fit justify-between gap-y-12 md:gap-y-0 md:gap-x-12 pb-8 md:pb-12 border-b border-graydeep border-solid">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                  },
                },
              }}
              className="footer-links flex-wrap w-full md:w-fit flex flex-row items-center gap-y-3 md:gap-y-0 gap-x-6"
            >
              {links.map((navLink, index) => (
                <a
                  href={navLink.to}
                  key={"nav-link-" + index}
                  className="text-2xl text-nowrap transition ease-in-out duration-300 font-light text-grayalt rounded hover:opacity-50"
                  aria-current="page"
                >
                  {navLink.label}
                </a>
              ))}
            </motion.div>
            <motion.a
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: 0.5,
                    ease: "linear",
                  },
                },
              }}
              href="mailto::hello@ramos.com"
              className="w-full md:w-fit text-4xl md:text-7xl text-white"
            >
              hello@ramos.com
            </motion.a>
          </div>
          <div className="flex w-full overflow-hidden h-fit flex-col md:flex-row justify-between py-12">
            <motion.div
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
                    delay: 1,
                  },
                },
              }}
              className="flex w-full md:w-fit flex-row gap-x-6"
            >
              {addresses.map((address, index) => (
                <div key={"addresses-" + index} className="flex flex-col">
                  <h6 className="text-white font-medium text-md">
                    {address.city}
                  </h6>
                  <span className="text-graydeep text-md mt-1">
                    {address.line1}
                  </span>
                  <span className="text-graydeep text-md">{address.zip}</span>
                </div>
              ))}
            </motion.div>
            <motion.div
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
                    delay: 1.5,
                  },
                },
              }}
              className="flex w-full md:w-fit flex-col mt-8 md:mt-0 items-start md:items-end gap-y-6 "
            >
              <a
                href="#"
                className="text-white text-xl hover:opacity-50 transition ease-in-out duration-300"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-white text-xl hover:opacity-50 transition ease-in-out duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-white text-xl hover:opacity-50 transition ease-in-out duration-300"
              >
                Facebook
              </a>
            </motion.div>
          </div>
          <div className="flex w-full flex-col md:flex-row items-center md:justify-between mb-12 mt-24">
            <div className="flex order-3 md:order-1 justify-center md:justify-start w-full md:w-fit flex-row flex-nowrap font-medium">
              <div className="w-fit flex flex-row flex-center">
                <h1
                  className={`h-fit overflow-hidden text-white text-7xl md:text-9xl relative overflow-hidden w-fit h-fit`}
                >
                  <span className="sr-only">ramos</span>
                  <motion.span
                     ref={ref}
                     initial="hidden"
                     animate={controls}
                    variants={{
                      visible: { transition: { staggerChildren: 0.05, delay: 2 } },
                      hidden: {},
                    }}
                    aria-hidden
                  >
                    {textArray.map((line, lineIndex) => (
                      <span className="block" key={`${line}-${lineIndex}`}>
                        {line.split(" ").map((word, wordIndex) => (
                          <span
                            className="inline-block"
                            key={`${word}-${wordIndex}`}
                          >
                            {word.split("").map((char, charIndex) => (
                              <motion.span
                                key={`${char}-${charIndex}`}
                                className="inline-block"
                                variants={animation}
                              >
                                {char}
                              </motion.span>
                            ))}
                          </span>
                        ))}
                      </span>
                    ))}
                  </motion.span>
                </h1>
              </div>
              <motion.span
                variants={{
                  hidden: {
                    scale: 0,
                  },
                  visible: {
                    scale: 1,
                    transition: {
                      duration: 1,
                      delay: 2,
                    },
                  },
                }}
                className="text-3xl md:text-5xl"
              >
                Ⓡ
              </motion.span>
            </div>
            <div className="flex order-2 md:order-2 flex-row w-full mb-8 md:mb-0 md:w-fit items-center justify-center gap-x-6 md:gap-x-12">
              <a
                href="#"
                className="text-graydeep transition ease-in-out duration-300 hover:text-white text-md mt-1"
              >
                Privacy policy
              </a>
              <a
                href="#"
                className="text-graydeep transition ease-in-out duration-300 hover:text-white text-md mt-1"
              >
                License agreement
              </a>
            </div>
            <motion.div
              variants={{
                hidden: {
                  scale: 0,
                },
                visible: {
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 2,
                  },
                },
              }}
              className="flex order-1 md:order-3 mb-12 md:mb-0 flex-row w-fit flex-center rounded-2xl bg-white text-dark px-4 py-4"
            >
              <Image
                alt="QR code"
                width={100}
                height={100}
                src={process.env.NEXT_PUBLIC_IMAGE_URL+"/qr.png"}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
