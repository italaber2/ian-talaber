import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { defaultLineOptions, defaultSeries } from "../common/lineGraphConfig";

interface MyComponentProps {
  seriesData: number[];
}

const LineGraph = ({ seriesData }: MyComponentProps) => {
  const [graphOptions] = useState<ApexOptions>(defaultLineOptions);
  const [series, setSeries] = useState(defaultSeries);

  useEffect(() => {
    setSeries([{ ...defaultSeries[0], data: seriesData }]);
  }, [seriesData]);

  return (
    <div className="app">
      <div className="row">
        <div className="line-graph">
          <Chart
            options={graphOptions}
            series={series}
            type="line"
            width="650"
          />
        </div>
      </div>
    </div>
  );
};

export default LineGraph;
