"use client";
import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function LineChart() {
  const once = true;
  const controls = useAnimation();
  const controls2 = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { amount: 0.5, once });

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
  const chartOptions = {
    chart: {
      id: "basic-bar",
      type: "line",
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    markers: {
      size: 3,
      strokeColors: "#ffd027",
      strokeWidth: 8,
      strokeOpacity: 0.3,
    },
    stroke: {
      width: 2,
    },
    xaxis: {
      categories: months,
      labels: {
        show: false,
      },
      lines: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      style: {
        colors: ["#fff"],
        fontWeight: 400,
        cssClass: "linechart-xaxis-label",
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      lines: {
        show: false,
      },
    },
    colors: ["#ffd027"],
    legend: {
      show: false,
    },
    grid: {
      show: true,
      borderColor: "#eee",
      strokeDashArray: 3,
      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  };
  const series = [
    {
      data: [1, 3, 6, 6, 12, 9, 12, 16],
    },
  ];


  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start("visible");
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView]);
  useEffect(() => {
    let timeout;
    const show = () => {
      controls2.start("visible");
    };

    if (isInView2) {
      show();
    } else {
      controls2.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView2]);

  return (
    <motion.div className="line-chart-container w-full h-full overflow-hidden relative">
      <motion.div
        animate={controls}
        ref={ref}
        initial="hidden"
        variants={{
          visible: { transition: { staggerChildren: 0.5 } },
          hidden: {},
        }}
        aria-hidden
        className="w-full h-full relative "
      >
        <Chart
          options={chartOptions}
          series={series}
          type="line"
          width="90%"
          height="100%"
          className="pl-2"
        />
        <motion.div
          variants={{
            hidden: {
              x: 0,
            },
            visible: {
              x: "200%",
              opacity: 1,
              transition: {
                duration: 2,
                delay: 1,
              },
            },
          }}
          className="h-full will-change w-full z-2 absolute top-0 bg-white"
        ></motion.div>
      </motion.div>
      <motion.div
        animate={controls2}
        ref={ref2}
        initial="hidden"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        className="w-full absolute  -bottom-0.5 px-2 flex flex-row justify-between items-center"
      >
        {months.map((item, index) => (
          <motion.span
            variants={{
              hidden: {
                y: 40,
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
            key={"month-" + index}
            className="text-graydeep will-change font-medium text-xs"
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default LineChart;
