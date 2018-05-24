import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class BarChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      output:props.output
    }
  }

  static defaultProps =
  {
    displayTitle:false,
    displayLegend: false,
    legendPosition:'right',

  }

  render()
  {
    return (<div className="barChart">
        <HorizontalBar

        // here we tell chart to look for data in state
          data={this.props.barData}
          width={90}
        	height={300}



          options={{
            maintainAspectRatio: false,
            title:{
              display:this.props.displayTitle,
              text:'Individualised Wellness',

              fontSize:25
            },


            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
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
