import { ApexOptions } from "apexcharts";

export interface ChartOptions extends ApexOptions {
  chart: {
    type: "line";
  };
  xaxis: {
    categories: number[];
  };
}

export interface ChartSeries {
  name: string;
  data: number[];
}

export const defaultOptions: ChartOptions = {
  chart: {
    type: "line",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
};
