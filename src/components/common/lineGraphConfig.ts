// lineGraphConfig.ts
import { ApexOptions } from "apexcharts";

export const defaultLineOptions: ApexOptions = {
  chart: {
    id: "basic-line",
    type: "line",
    toolbar: {
      show: true,
    },
  },
  xaxis: {
    categories: [
      "Q1 2022",
      "Q2 2022",
      "Q3 2022",
      "Q4 2022",
      "Q1 2023",
      "Q2 2023",
      "Q3 2023",
      "Q4 2023",
      "Q1 2024",
      "Q2 2024",
    ],
  },
  stroke: {
    curve: "straight",
  },
  title: {
    text: "Monthly Sales Data",
    align: "left",
  },
  yaxis: {
    title: {
      text: "Sales (in units)",
    },
  },
  tooltip: {
    enabled: false,
    shared: false,
    intersect: false,
  },
  markers: {
    size: 4,
    colors: ["#FFA41B"],
    strokeWidth: 2,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
  },
};

export const defaultSeries = [
  {
    name: "Sales",
    data: [1, 1, 2, 3, 5, 8, 10, 10, 10, 10],
  },
];
