import React, {Component} from 'react';
import {Bar, Line, Pie, HorizontalBar} from 'react-chartjs-2';

class BarChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      barData:props.barData
    }
  }

  static defaultProps =
  {
    displayTitle:true,
    displayLegend: false,
    legendPosition:'right',
  }

  render()
  {
    return (<div className="barChart">
        <HorizontalBar
          data={this.state.barData}
          options={{
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

export default BarChart;
