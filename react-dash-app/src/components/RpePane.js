import React, {Component} from 'react';
import RpeChart from './rpeChart';
import PointerGauge from './PointerGauge'
import { Button } from 'reactstrap';


import '../App.css';

class RpePane extends Component{
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
        <h4>RPE</h4>
        <hr />
        <PointerGauge name={"RPE"} value={this.props.rpeSummary.value} gaugeLowerBound={this.props.rpeSummary.min} gaugeUpperBound={this.props.rpeSummary.max} gaugeMaxValue={10000} firstArc={"orange"} secondArc={"green"} thirdArc={"red"} />
        <Button onClick={this.showChart} color="info">View Detail</Button>
        </div>
      }
      {this.state.view === 'chart' &&
      <div>
        <h4>RPE</h4>
        <hr />
        <RpeChart rpeData={this.props.rpeData}/>
        <p>&nbsp;</p>
        <Button onClick={this.showGauge} color="info">View Summary</Button>
      </div>
      }
      </div>
      )}
  }

export default RpePane;
