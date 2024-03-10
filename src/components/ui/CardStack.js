"use client";
import { animate, useInView, motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ComboChart from "./ComboChart";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

let interval;

export const CardStack = ({ items, offset, scaleFactor }) => {
  const once = true;
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    for (let i = 0; i < items.length; i++) {
      //   setCards((prevCards) => {
      //     console.log("i: ", i, prevCards, items[i]);
      //     const newArray = [...prevCards]; // create a copy of the array
      //     if (!cards.find((it) => it.id === items[i].id)) {
      //       newArray.unshift(items[i]); // move the last element to the front
      //     }
      //     return newArray;
      //   });
    }
  }, [items]);

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start("visible");
    };

    if (isInView) {
      show();
      setTimeout(() => {
        setReload();
      }, 1000);
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delay: 2,
          },
        },
      }}
      className={`${urbanist.className} relative z-30 bottom-hidden will-change h-48 w-full md:h-40 md:w-96`}
    >
      {cards.map((card, index) =>
        card.empty ? (
          <motion.div
            key={card.id}
            className="absolute bg-white h-48 w-full md:h-48 will-change md:w-96 rounded-2xl px-4 py-2 shadow-xl border border-neutral-200 shadow-black/[0.1] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            variants={{
              hidden: {
                y: 100,
                opacity: 0,
                scale: 1,
                zIndex: 7 + cards.length - index,
              },
              visible: {
                y: index * 3 * -CARD_OFFSET,
                opacity: 1,
                scale: 1 - index * 2 * SCALE_FACTOR,
                zIndex: 7 + cards.length - index,
                transition: {
                  duration: 1,
                },
              },
            }}
          ></motion.div>
        ) : (
          <motion.div
            key={card.id}
            className="absolute bg-white h-48 w-full md:h-48 will-change md:w-96 rounded-2xl px-4 py-2.5 shadow-xl border border-neutral-200 shadow-black/[0.1] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            variants={{
              hidden: {
                y: 100,
                opacity: 0,
                scale: 1,
                zIndex: 7 + cards.length - index,
              },
              visible: {
                y: index * 3 * -CARD_OFFSET,
                opacity: 1,
                scale: 1 - index * 2 * SCALE_FACTOR,
                zIndex: 7 + cards.length - index,
                transition: {
                  duration: 1,
                },
              },
            }}
          >
            <div className="font-normal flex-row w-full flex flex-nowrap items-center">
              {card.heading === "Insights" ? (
                <div className="bg-secondary text-dark p-1.5 flex flex-row flex-center rounded-md">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-2.5 h-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 16C7.39782 16 7.77936 15.842 8.06066 15.5607C8.34196 15.2794 8.5 14.8978 8.5 14.5C8.50488 14.4501 8.50488 14.3999 8.5 14.35L11.29 11.56H11.52H11.75L13.36 13.17C13.36 13.17 13.36 13.22 13.36 13.25C13.36 13.6478 13.518 14.0294 13.7993 14.3107C14.0806 14.592 14.4622 14.75 14.86 14.75C15.2578 14.75 15.6394 14.592 15.9207 14.3107C16.202 14.0294 16.36 13.6478 16.36 13.25V13.17L20 9.5C20.2967 9.5 20.5867 9.41203 20.8334 9.2472C21.08 9.08238 21.2723 8.84811 21.3858 8.57403C21.4993 8.29994 21.5291 7.99834 21.4712 7.70736C21.4133 7.41639 21.2704 7.14912 21.0607 6.93934C20.8509 6.72956 20.5836 6.5867 20.2926 6.52882C20.0017 6.47094 19.7001 6.50065 19.426 6.61418C19.1519 6.72771 18.9176 6.91997 18.7528 7.16664C18.588 7.41332 18.5 7.70333 18.5 8C18.4951 8.04988 18.4951 8.10012 18.5 8.15L14.89 11.76H14.73L13 10C13 9.60218 12.842 9.22064 12.5607 8.93934C12.2794 8.65804 11.8978 8.5 11.5 8.5C11.1022 8.5 10.7206 8.65804 10.4393 8.93934C10.158 9.22064 10 9.60218 10 10L7 13C6.60218 13 6.22064 13.158 5.93934 13.4393C5.65804 13.7206 5.5 14.1022 5.5 14.5C5.5 14.8978 5.65804 15.2794 5.93934 15.5607C6.22064 15.842 6.60218 16 7 16ZM20.5 20H3.5V3C3.5 2.73478 3.39464 2.48043 3.20711 2.29289C3.01957 2.10536 2.76522 2 2.5 2C2.23478 2 1.98043 2.10536 1.79289 2.29289C1.60536 2.48043 1.5 2.73478 1.5 3V21C1.5 21.2652 1.60536 21.5196 1.79289 21.7071C1.98043 21.8946 2.23478 22 2.5 22H20.5C20.7652 22 21.0196 21.8946 21.2071 21.7071C21.3946 21.5196 21.5 21.2652 21.5 21C21.5 20.7348 21.3946 20.4804 21.2071 20.2929C21.0196 20.1054 20.7652 20 20.5 20Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              ) : (
                <div className="bg-secondary text-dark p-1.5 flex flex-row flex-center rounded-md">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-2.5 h-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 15H20V12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11H13V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8V2C16 1.73478 15.8946 1.48043 15.7071 1.29289C15.5196 1.10536 15.2652 1 15 1H9C8.73478 1 8.48043 1.10536 8.29289 1.29289C8.10536 1.48043 8 1.73478 8 2V8C8 8.26522 8.10536 8.51957 8.29289 8.70711C8.48043 8.89464 8.73478 9 9 9H11V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12V15H2C1.73478 15 1.48043 15.1054 1.29289 15.2929C1.10536 15.4804 1 15.7348 1 16V22C1 22.2652 1.10536 22.5196 1.29289 22.7071C1.48043 22.8946 1.73478 23 2 23H8C8.26522 23 8.51957 22.8946 8.70711 22.7071C8.89464 22.5196 9 22.2652 9 22V16C9 15.7348 8.89464 15.4804 8.70711 15.2929C8.51957 15.1054 8.26522 15 8 15H6V13H18V15H16C15.7348 15 15.4804 15.1054 15.2929 15.2929C15.1054 15.4804 15 15.7348 15 16V22C15 22.2652 15.1054 22.5196 15.2929 22.7071C15.4804 22.8946 15.7348 23 16 23H22C22.2652 23 22.5196 22.8946 22.7071 22.7071C22.8946 22.5196 23 22.2652 23 22V16C23 15.7348 22.8946 15.4804 22.7071 15.2929C22.5196 15.1054 22.2652 15 22 15ZM7 17V21H3V17H7ZM10 7V3H14V7H10ZM21 21H17V17H21V21Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              )}
              <span className="text-sm ml-2 text-dark font-semibold text-left">
                {card.heading}
              </span>
            </div>
            <div className="w-full gap-x-3 flex flex-row justify-between items-end">
              <div className="w-fit flex flex-col justify-end">
                <span className="text-sm w-full text-graydeep font-medium text-left mb-2">
                  Total profits
                </span>
                <span className="text-sm w-full text-xl text-dark font-medium text-left mb-2">
                  $<span className="text-2xl ml-1">264,2k</span>
                </span>
                <span className="text-sm rounded-lg px-4 py-2 text-nowrap w-fit text-sm font-semibold shadow text-dark bg-positive">
                  Data visualization
                </span>
              </div>
              <div className="absolute bottom-2 flex flex-col justify-end items-end right-2 w-3/5 h-full">
                <ComboChart reload={reload} />
              </div>
            </div>
          </motion.div>
        )
      )}
    </motion.div>
  );
};
