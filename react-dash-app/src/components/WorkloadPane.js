import React, {Component} from 'react';
import WorkloadChart from './workloadChart';
import PointerGauge from './PointerGauge'
import { Button } from 'reactstrap';


import '../App.css';

class WorkloadPane extends Component{
  constructor(props){
    super(props);
    this.state = {
      view: 'gauge'
    }
    this.showGauge = this.showGauge.bind(this);
    this.showChart = this.showChart.bind(this);
  }

  showGauge() {
    this.setState({ view: 'gauge' })
  }

  showChart() {
    this.setState({ view: 'chart' })
  }

  render() {
    return (
      <div>
      {this.state.view === 'gauge' &&
      <div>
        <h4>Workload</h4>
        <hr />
        <PointerGauge name={"Workload"} value={this.props.workloadSummary.value} gaugeLowerBound={this.props.workloadSummary.min} gaugeUpperBound={this.props.workloadSummary.max} gaugeMaxValue={25000} firstArc={"orange"} secondArc={"green"} thirdArc={"red"} />
        <Button onClick={this.showChart} color="info">View Detail</Button>
        </div>
      }
      {this.state.view === 'chart' &&
      <div>
        <h4>Workload</h4>
        <hr />
        <WorkloadChart workloadData={this.props.workloadData}/>
        <p>&nbsp;</p>
        <Button onClick={this.showGauge} color="info">View Summary</Button>
      </div>
      }
      </div>
      )}
  }

export default WorkloadPane;
