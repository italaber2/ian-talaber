import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
  ChartOptions,
  ChartSeries,
  defaultOptions,
  defaultSeries,
} from "../common/radarChartConfig";

interface MyComponentProps {
  seriesData: number[];
}

const MyComponent = ({ seriesData }: MyComponentProps) => {
  const [] = useState<ChartOptions>(defaultOptions);
  const [series, setSeries] = useState<ChartSeries[]>(defaultSeries);

  useEffect(() => {
    setSeries([{ ...defaultSeries[0], data: seriesData }]);
  }, [seriesData]);

  return (
    <div className="app">
      <div className="row">
        <div className="radar-chart">
          <Chart
            options={defaultOptions}
            series={series}
            type="radar"
            width="650"
          />
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
