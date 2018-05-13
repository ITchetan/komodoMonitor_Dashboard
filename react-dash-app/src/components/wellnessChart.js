import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

// class for wellness chart
class BarChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      // chart data will be generated in app and passed in chart property, following is telling chart that data will come from property
      barData:props.barData
    }
  }

  //chart is drown here
  render()
  {
    return (<div className="barChart">
        <HorizontalBar
        // here we tell chart to look for data in state
          data={this.props.barData}
          options={{
            title:{
              display:true,
              text:'Individualised Wellness',

              fontSize:25
            },
            legend:{
              display:false,
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
//exporting class to use in other files
export default BarChart;
