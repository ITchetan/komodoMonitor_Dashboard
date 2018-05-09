import React, { Component } from 'react';
import { FlexyFlipCard } from 'flexy-flipcards';
import RpeChart from './rpeChart.js';

class RpeFlip extends Component {
  constructor(props){
    super(props);
    this.state = {
      // chart data will be generated in app and passed in chart property, following is telling chart that data will come from property
      // barData:props.barData,
      // workloadData:props.workloadData,
      rpeData:props.rpeData
    }
  }

  render () {
    return (
      <FlexyFlipCard
        frontBackgroundColor="#ffffff"
        backBackgroundColor="#ffffff">
        <div>
          <div className='gauge-exertion'></div>
          <button ref="flipper">Show Detail</button>
        </div>
        <div>
          <RpeChart rpeData={this.state.rpeData} />
          <button ref="flipper">Show Summary</button>
        </div>
      </FlexyFlipCard>
    );
  }
}

export default RpeFlip;
