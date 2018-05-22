import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

var value1 = 50;
var value2 = 100-value1;

class RpeDoughnut extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <div className="doughnut">
          <Doughnut
            data={this.props.rpeDoughnutData}
            width={110}
          	height={110}
            options={{
              segmentShowStroke : true,
              maintainAspectRatio: false,

            }} />




        </div>
    )

  }
}

//exporting class to use in other files
export default RpeDoughnut;
