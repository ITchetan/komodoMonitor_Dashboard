import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class BarChart extends Component{

  render(){

    return (<div className="barChart">
    
        <HorizontalBar

        // here we tell chart to look for data in state
          data={this.props.barData}
          width={10}
          height={200}

          options={{
            maintainAspectRatio: false,
            title:{
              display:false,
            },
            legend:{
              display:false,

            },
            scales: {
              xAxes: [{
                  ticks: {
                      stepSize: 1,
                      min: 0,
                      suggestedMax: 5
                  }
              }]
            }

          }}
        />
      </div>
    )
  }
}

export default BarChart;
