import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

// class for rpe chart
class RpeChart extends Component{


  //chart is drown here
  render(){
    return (
      <div className="lineChart">
          <Bar
            width={5}
            height={3.5}
            data={this.props.rpeData}// data passed as property
            options={{
              title:{
                display:false,
              },
              animation: {
                        duration: 5
                    },
              legend:{
                display:false,
              },
              scales: {
                xAxes: [{//barPercentage: 1,
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
export default RpeChart;
