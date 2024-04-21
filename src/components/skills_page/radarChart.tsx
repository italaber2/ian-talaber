import React, { Component } from "react";
import Chart from "react-apexcharts";

interface MyComponentProps {
  seriesData: number[];
}

interface MyComponentState {
  options: {
    chart: {
      id: string;
    };
    xaxis: {
      categories: number[];
    };
  };
  series: {
    name: string;
    data: number[];
  }[];
}

class MyComponent extends Component<MyComponentProps, MyComponentState> {
  constructor(props: MyComponentProps) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: this.props.seriesData,
        },
      ],
    };
  }

  componentDidUpdate(prevProps: MyComponentProps) {
    if (this.props.seriesData !== prevProps.seriesData) {
      this.setState({
        series: [
          {
            name: "series-1",
            data: this.props.seriesData,
          },
        ],
      });
    }
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MyComponent;
