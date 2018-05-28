import React, { Component } from 'react';
import LiquidChart from 'react-liquidchart';
import '../App.css';


const fontSize = {
      value: 0.5,
      postfix: 0.3,
      legend: 0.3,
    };

const wetColor = {//text color
  fill:"rgb(23,139,202)"
}
const dryColor = {//text color
  fill:"black"
}

const stops = [//liquid fill color
  <stop key={5}stopColor="#C5F2F2" />,
];


class Liquid extends Component {

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
            wetStyle={wetColor}
            dryStyle={dryColor}
            gradient={{
              type: 1,
              x1: 0,
              x2: 0,
              y1: 100,
              y2: 0,
              stops
            }}
            postfix="%"
            fontSizes={fontSize}


          />

    );
  }
}
export default Liquid;
