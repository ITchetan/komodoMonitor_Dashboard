import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

// class for rpe chart
class RpeChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      // chart data will be generated in app and passed in chart property, following is telling chart that data will come from property
      rpeData:props.rpeData
    }
  }


  //chart is drown here
  render(){
    return (
      <div className="lineChart">
          <Line
          // here we tell chart to look for data in state
            data={this.props.rpeData}
            options={{
              title:{
                display:true,
                text:'RPE',

                fontSize:25
              },
              legend:{
                display:true,
                position:'top'
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

//exporting class to use in other files
export default RpeChart;
