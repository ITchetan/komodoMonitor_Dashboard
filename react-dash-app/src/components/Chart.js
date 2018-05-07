import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: false,
    legendPosition:'right',
  }

  render(){
    return (
      <div className="chart">
        <HorizontalBar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Overall Wellness',
              fontSize:15
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            },
            scales: {
              xAxes: [{
                  ticks: {
                      min: 0
                  }
              }]
            }

          }}
        />

      </div>
    )
  }
}

export default Chart;
