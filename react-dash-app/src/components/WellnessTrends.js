import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';


// class for workload chart
class WellnessTrends extends Component{

  //chart is drown here
  render(){
    return (
      <div className="lineChart">
          <Line
            width={5}
          	height={1}
            data={this.props.wellnessTrendsData}// data passed as property
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
