import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


class WorkloadChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps =
  {
    displayTitle:true,
    displayLegend: false,
    legendPosition:'right',
  }
  render(){
    return (
      <div className="lineChart">
          <Line
            data={this.state.chartData}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Workload',

                fontSize:25
              },
              legend:{
                display:true,
                position:'right'
              },
              scales: {
                yAxes: [{
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

export default WorkloadChart;
