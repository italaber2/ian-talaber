// lineChartConfig.ts
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
      "Typescript",
      "React",
      "Cypress",
      "CI/CD",
      "Accessibility",
      "Postman",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  stroke: {
    curve: "smooth",
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
    enabled: true,
    shared: true,
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
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 140, 155, 160],
  },
];
