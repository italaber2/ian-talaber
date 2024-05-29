export interface ChartOptions {
  chart: {
    type: "radar";
  };
  xaxis: {
    categories: string[];
  };
  fill: {
    colors: string[];
  };
  plotOptions: {
    radar: {
      polygons: {
        strokeColor: string;
        fill: {
          colors: string[];
        };
      };
    };
  };
}

export interface ChartSeries {
  name: string;
  data: number[];
}

export const defaultOptions: ChartOptions = {
  chart: {
    type: "radar",
  },
  xaxis: {
    categories: [
      "Cypress",
      "JS/TS",
      "React",
      "CSS",
      "Accessibility",
      "CI/CD",
      "HTML",
      "Other",
    ],
  },
  fill: {
    colors: ["#FF4560"],
  },
  plotOptions: {
    radar: {
      polygons: {
        strokeColor: "#e8e8e8",
        fill: {
          colors: ["#f8f8f8", "#fff"],
        },
      },
    },
  },
};

export const defaultSeries: ChartSeries[] = [
  {
    name: "series-1",
    data: [],
  },
];
