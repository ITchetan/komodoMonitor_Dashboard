import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

// class for workload chart
class WorkloadChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      // chart data will be generated in app and passed in chart property, following is telling chart that data will come from property
      workloadData:props.workloadData
    }
  }


  //chart is drown here
  render(){
    return (
      <div className="lineChart">
          <Bar
          // here we tell chart to look for data in state
            // width={80}
          	// height={60}
            data={this.props.workloadData}
            options={{
              title:{
                display:false,
              },
              legend:{
                display:false,
              },
              scales: {
                yAxes: [{
                    ticks: {
                      suggestedMin: 0,
                      suggestedMax: 12000
                    }
                }]
              }

            }}
          />
        </div>
    )
  }
}

//exporting class to use in other files
export default WorkloadChart;
