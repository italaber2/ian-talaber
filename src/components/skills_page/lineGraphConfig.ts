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
    text: "Skill Proficiency Over Time",
    align: "center",
    style: {
      fontSize: "20px",
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
    min: 2,
    max: 10,
  },
  markers: {
    size: 3,
    colors: ["#FFFFFF"],
    strokeWidth: 0,
  },
  legend: {
    show: true,
    labels: {
      colors: "#FFFFFF",
    },
    fontSize: "16px",
  },
};

export const defaultSeries = [
  {
    name: "Cypress",
    data: [5, 5, 6, 6, 6, 6, 7, 7, 7, 7],
  },
  {
    name: "TypeScript",
    data: [3, 3, 3, 4, 4, 4, 4, 5, 6, 6],
  },
  {
    name: "React",
    data: [2, 2, 2, 3, 3, 3, 3, 4, 5, 5],
  },
  {
    name: "Web accessibility",
    data: [3, 3, 3, 3, 4, 4, 4, 5, 5, 5],
  },
  {
    name: "CI/CD",
    data: [3, 3, 3, 3, 4, 4, 4, 4, 4, 4],
  },
];
