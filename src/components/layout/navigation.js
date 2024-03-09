"use client";
import React, { useEffect } from "react";
// React
import { motion, inView, useAnimate } from "framer-motion";
// Element
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  weight: ["200","300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const navLinks = [
  { label: "Dashboard", to: "#" },
  { label: "Reports", to: "#" },
  { label: "Documentation", to: "#" },
  { label: "History", to: "#" },
  { label: "Settings", to: "#" },
];
export default function Navigation() {
  // const [scope, animate] = useAnimate();

  // useEffect(() => {
  //   animate(scope.current, { y: [200, 0] }, { type: "spring", stiffness: 30 });
  // }, []);
  const container = {
    down: { y: 100 ,opacity: 0},
    appear: {
      y: 0 ,opacity: 1,
      transition: {
        staggerChildren: .7,
        duration: 1,
        type: "spring",
        bounce: 0.1,
      },
    },
  };

  const item = {
    down: { y: 60 ,opacity: 0 },
    appear: { y: 0 ,opacity: 1,  transition: { duration: 1, type: "spring",
    bounce: 0.1, } },
  };
  return (
    <header className={`${urbanist.className} w-full page-container`}>
      <nav
        id="header"
        className="absolute page-container page-padding z-20 top-3 "
      >
        <motion.div
          variants={container}
          initial="down"
          animate="appear"
          className="flex will-change bg-dark overflow-hidden relative h-16 rounded-2xl text-white flex-wrap items-center justify-between w-full pl-6 pr-2 py-2"
        >
          <motion.div
            variants={item}
            className="flex items-center relative w-fit will-change"
          >
            <a href="/">
              <img src="/images/logo.png" className="h-6" alt="Ramos Logo" />
            </a>
          </motion.div>
          <motion.div
            variants={item}
            className="items-center will-change justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:px-6 md:py-3 mt-4 font-light border md:rounded-2xl md:border-0 bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-alt ">
              {navLinks.map((navLink, index) => (
                <li key={"nav-link-" + index}>
                  <a
                    href={navLink.to}
                    className="block py-2 px-3 text-sm transition ease-in-out duration-300  text-dark md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-positive md:p-0"
                    aria-current="page"
                  >
                    {navLink.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={item}
            className="flex will-change md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
          >
            <button
              type="button"
              className="text-dark bg-white transition ease-in-out duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-xl active:shadow-inner font-semibold rounded-xl text-sm px-6 py-3 text-center"
            >
              Sign Up
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </motion.div>
         
        </motion.div>
      </nav>
    </header>
  );
}
