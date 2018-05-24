import React, { Component } from 'react';
import LiquidChart from 'react-liquidchart';


const stops = [
  <stop key={4} offset="0" stopColor="red" />,
  <stop key={5} offset="1" stopColor="#F2F3F4" />,
];

class Liquid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (


        <LiquidChart
            responsive
            legend={this.props.legend}
            value={this.props.value}
            amplitude={10}
            frequency={2}
            animationTime={2000}
            animationWavesTime={5000}
            gradient={{
              type: 1,
              x1: 0,
              x2: 0,
              y1: 100,
              y2: 0,
              stops
            }}
            postfix="%"
            fontSizes={{
              legend: 0.30,
              value: 0.50,
              percentage: 0.15,
            }}
          />

    );
  }
}
export default Liquid;
