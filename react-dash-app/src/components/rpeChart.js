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
          width={80}
        	height={60}
            data={this.props.rpeData}
            options={{
              title:{
                display:false,
                text:'RPE',

                fontSize:25
              },
              legend:{
                display:false,
                position:'top'
              },
              scales: {
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
