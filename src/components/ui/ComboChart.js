"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const data1 = [
  {
    x: "2021",
    y: 9,
  },
  {
    x: "2020",
    y: 11,
  },
  {
    x: "2019",
    y: 10,
  },
  {
    x: "2018",
    y: 12,
  },
  {
    x: "2017",
    y: 13,
  },
];
const data2 = [
  {
    x: "2021",
    y: 10,
  },
  {
    x: "2020",
    y: 12,
  },
  {
    x: "2019",
    y: 11,
  },
  {
    x: "2018",
    y: 13,
  },
  {
    x: "2017",
    y: 14,
  },
];
const columnData1 = [
  {
    x: "2021",
    y: 5,
  },
  {
    x: "2020",
    y: 2,
  },
  {
    x: "2019",
    y: 5,
  },
  {
    x: "2018",
    y: 7,
  },
  {
    x: "2017",
    y: 3,
  },
];
const columnData2 = [
  {
    x: "2021",
    y: 6,
  },
  {
    x: "2020",
    y: 3,
  },
  {
    x: "2019",
    y: 6,
  },
  {
    x: "2018",
    y: 8,
  },
  {
    x: "2017",
    y: 4,
  },
];

function ComboChart({ reload }) {
  const [lineData, setLineData] = useState(data1);
  const [columnData, setColumnData] = useState(columnData1);
  const chartOptions = {
    chart: {
      id: "combo-chart",
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.2,
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    markers: {
      show: false,
    },
    stroke: {
      width: 1,
    },
    xaxis: {
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
    colors: [
      function ({ value, seriesIndex, w }) {
        if (value < 7) {
          return "#E6E6E6";
        } else {
          return "#ffd027";
        }
      },
    ],
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        borderRadiusApplication: "around",
        borderRadiusWhenStacked: "last",
        columnWidth: "80%",
      },
    },
    annotations: {
      xaxis: [
        {
          x: "2018",
          borderColor: "#ffd027",
          label: {
            show: false,
            enabled: false,
          },
          offsetY: -20,
        },
      ],
    },
  };
  const series = [
    {
      type: "line",
      data: lineData,
    },
    {
      type: "column",
      data: columnData,
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      if (lineData[0].y === 9) {
        setLineData(data2);
        setColumnData(columnData2);
      } else {
        setLineData(data1);
        setColumnData(columnData1);
      }
    }, 2000);
   
  }, [reload, lineData]);
  return (
    <div
      className={`${urbanist.className} line-chart-container items-end flex flex-col justify-end`}
    >
      <Chart
        options={chartOptions}
        series={series}
        type="bar"
        width="90%"
        height="100%"
        className={`${urbanist.className} flex flex-col justify-end items-end`}
      />
    </div>
  );
}

export default ComboChart;
