import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';


// class for workload chart
class WellnessTrends extends Component{

  //chart is drown here
  render(){
    return (
      <div className="lineChart">
          <Line
            data={this.props.wellnessTrendsData}// data passed as property
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
                yAxes: [{
                    ticks: {
                      min: 0,
                      max: 30
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
export default WellnessTrends;
