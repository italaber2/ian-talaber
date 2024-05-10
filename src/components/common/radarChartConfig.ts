// radarChartConfig.ts

export interface ChartOptions {
  chart: {
    type: "radar";
  };
  xaxis: {
    categories: number[];
  };
  fill: {
    // opacity: number;
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
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
  fill: {
    // opacity: 0.5, // Set the opacity of the fill
    colors: ["#FF4560"], // You can specify the colors here if needed
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
