import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

// class for workload chart
class WorkloadChart extends Component{

  //chart is drown here
  render(){
    return (
      <div className="lineChart">
          <Bar
            data={this.props.workloadData}// data passed as property
            options={{
              title:{
                display:false,
              },
              legend:{
                display:false,
              },
              scales: {
                xAxes: [{//this starts line chart on yaxes
                }, {
                  id: '2nd axis',
                  type: 'category',
                  position: 'bottom',
                  display: false // want this hidden
                }],
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
