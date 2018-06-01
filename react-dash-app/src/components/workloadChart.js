import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

// class for workload chart
class WorkloadChart extends Component{

  //chart is drown here
  render(){
    return (
      <div className="lineChart">
          <Bar
            width={5}
            height={3.5}
              data={this.props.workloadData}// data passed as property
            options={{
              animation: {
                        duration: 5
                    },
              title:{
                display:false,
              },
              legend:{
                display:false,
              },
              scales: {
                xAxes: [{
                }, {
                  id: '2nd axis',
                  type: 'category',
                  position: 'bottom',
                  display: false // want this hidden
                }],
                yAxes: [{
                    ticks: {
                      suggestedMin: 0,
                      suggestedMax: 10000
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
