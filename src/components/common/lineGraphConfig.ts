// lineGraphConfig.ts
import { ApexOptions } from "apexcharts";

const yAxisCategories = [
  "",
  "Clueless 😵‍💫",
  "Noob 🆘",
  "Novice 🫤",
  "Acceptable 👍",
  "Pretty alright 💡",
  "Proficient 👏",
  "Pretty good! 🥳",
  "Expert 🔥",
  "Zen master 🧘",
];

export const defaultLineOptions: ApexOptions = {
  chart: {
    id: "basic-line",
    type: "line",
    toolbar: {
      show: false,
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
    labels: {
      style: {
        colors: "#FFFFFF",
        fontSize: "16px",
      },
      rotate: -45,
      rotateAlways: true,
    },
  },
  stroke: {
    curve: "straight",
    width: 3,
  },
  title: {
    text: "Skill Proficiency Over Time (NOT ACTUAL DATA)",
    align: "center",
    style: {
      fontSize: "18px",
      color: "#FFFFFF",
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#FFFFFF",
        fontSize: "16px",
      },
      formatter: (value) => {
        return yAxisCategories[value - 1];
      },
    },
  },
  markers: {
    size: 3,
    colors: ["#FFFFFF"],
    strokeWidth: 0,
  },
  legend: {
    show: true,
    labels: {
      colors: "#FF0000",
    },
    fontSize: "15px",
  },
};

export const defaultSeries = [
  {
    name: "Cypress",
    data: [2, 4, 6, 8, 10, 8, 10, 10, 10, 10],
  },
  {
    name: "Typescript",
    data: [2, 3, 5, 8, 2, 2, 3, 5, 8, 4],
  },
  {
    name: "React",
    data: [2, 8, 3, 2, 4, 5, 2, 2, 2, 7],
  },
  {
    name: "Web accessibility",
    data: [2, 8, 3, 2, 4, 5, 2, 2, 2, 7],
  },
  {
    name: "CI/CD",
    data: [2, 8, 3, 2, 4, 5, 2, 2, 2, 7],
  },
];
