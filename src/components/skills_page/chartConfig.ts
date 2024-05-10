// chartConfig.ts

export interface ChartOptions {
  chart: {
    id: string;
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
    id: "basic-bar",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
};

export const defaultSeries: ChartSeries[] = [
  {
    name: "series-1",
    data: [],
  },
];
