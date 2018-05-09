import React, { Component } from 'react';
import { FlexyFlipCard } from 'flexy-flipcards';
import WorkloadChart from './workloadChart.js';
import { Button } from 'react-bootstrap';

class WorkloadFlip extends Component {
  constructor(props){
    super(props);
    this.state = {
      // chart data will be generated in app and passed in chart property, following is telling chart that data will come from property
      // barData:props.barData,
      workloadData:props.workloadData,
      // rpeData:props.rpeData
    }
  }

  render () {
    return (
      <FlexyFlipCard
        frontBackgroundColor="#ffffff"
        backBackgroundColor="#ffffff">
        <div>
          <div className='gauge-workload'></div>
          <div style={{ float: 'right' }}><Button ref="flipper" bsStyle="primary" bsSize="large">Show Detail</Button></div>
        </div>
        <div>
          <WorkloadChart workloadData={this.state.workloadData} />
          <div style={{ float: 'right' }}><Button ref="flipper" bsStyle="primary" bsSize="large">Show Summary</Button></div>
        </div>
      </FlexyFlipCard>
    );
  }
}

export default WorkloadFlip;
