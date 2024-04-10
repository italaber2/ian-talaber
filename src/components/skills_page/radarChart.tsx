import React from "react";
// import { RadarData, RadarOptions } from "./radarConfig";
import { Radar } from "react-chartjs-2";

<Radar
  datasetIdKey="id"
  data={{
    labels: ["Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "March",
        backgroundColor: "rgba(34, 202, 236, .2)",
        borderColor: "rgba(34, 202, 236, 1)",
        pointBackgroundColor: "rgba(34, 202, 236, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 1)",
        data: [13, 10, 12, 6, 5],
      },
    ],
  }}
/>;
