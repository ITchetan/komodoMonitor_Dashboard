import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

var value1 = 50;
var value2 = 100-value1;

class WorkloadDoughnut extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <div className="doughnut">
          <Doughnut
            data={this.props.workloadDoughnutData}
            width={110}
          	height={110}
            options={{
              maintainAspectRatio: false,
              segmentShowStroke : true,
          		segmentStrokeColor : "grey",
          		segmentStrokeWidth : 2,
          		percentageInnerCutout : 20,
          		animationSteps : 50,
          		animationEasing : "easeOutBounce",
          		animateScale : false


            }} />




        </div>
    )

  }
}

//exporting class to use in other files
export default WorkloadDoughnut;
