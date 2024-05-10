import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
  ChartOptions,
  ChartSeries,
  defaultOptions,
  defaultSeries,
} from "./chartConfig";

interface MyComponentProps {
  seriesData: number[];
}

const MyComponent = ({ seriesData }: MyComponentProps) => {
  const [options] = useState<ChartOptions>(defaultOptions);
  const [series, setSeries] = useState<ChartSeries[]>(defaultSeries);

  useEffect(() => {
    setSeries([{ ...defaultSeries[0], data: seriesData }]);
  }, [seriesData]);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="bar" width="500" />
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
