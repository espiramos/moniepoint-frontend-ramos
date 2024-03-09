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
      <div className="getstarted-content px-12 page-container flex flex-col justify-center flex-nowrap w-full">
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
          <div className="flex w-full flex-row items-center overflow-hidden h-fit justify-between gap-x-12 pb-12 border-b border-graydeep border-solid">
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
              className="footer-links flex flex-row items-center gap-x-6"
            >
              {links.map((navLink, index) => (
                <a
                  href={navLink.to}
                  key={"nav-link-" + index}
                  className="text-2xl transition ease-in-out duration-300 font-light text-grayalt rounded hover:opacity-50"
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
              className=" heading-text-2 text-white"
            >
              hello@ramos.com
            </motion.a>
          </div>
          <div className="flex w-full overflow-hidden h-fit flex-row justify-between py-12">
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
              className="flex flex-row gap-x-6"
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
              className="flex flex-col items-end gap-y-6 "
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
          <div className="flex w-full flex-row justify-between mt-36">
            <div className="flex flex-row flex-nowrap font-medium">
              <div className="w-full flex flex-row flex-center">
                <h1
                  className={`h-fit overflow-hidden text-white text-9xl relative overflow-hidden w-fit h-fit`}
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
                            <span className="inline-block">&nbsp;</span>
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
                className="text-5xl"
              >
                Ⓡ
              </motion.span>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-12">
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
              className="flex flex-row flex-center rounded-2xl bg-white text-dark px-4 py-4"
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
