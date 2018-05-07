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

// Chart options
  render(){
    return (
      <div className="chart">
        <HorizontalBar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Individualised Wellness',
              fontSize:25
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
