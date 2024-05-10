// import React, { useEffect, useState } from "react";
// import Chart from "react-apexcharts";
// import { defaultOptions } from "../common/lineGraphConfig";

// interface MyComponentProps {
//   seriesData: number[];
// }

// const MyComponent = ({ seriesData }: MyComponentProps) => {
//   const [series, setSeries] = useState<Array<{ name: string; data: number[] }>>(
//     []
//   );

//   useEffect(() => {
//     if (defaultOptions.series) {
//       // Check if defaultOptions.series is defined
//       const updatedSeries = [
//         { ...defaultOptions.series[0], data: seriesData.slice() }, // Copy array before modification
//       ];
//       setSeries(updatedSeries);
//     }
//   }, [seriesData]);

//   return (
//     <div className="app">
//       <div className="row">
//         <div className="line-chart">
//           <Chart
//             options={defaultOptions}
//             series={series}
//             type="line"
//             width="650"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyComponent;
