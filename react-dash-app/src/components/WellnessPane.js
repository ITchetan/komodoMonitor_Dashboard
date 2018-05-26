import React, {Component} from 'react';
import BarChart from './wellnessChart';
import WellnessTrends from './WellnessTrends';
import PointerGauge from './PointerGauge'
import { Button } from 'reactstrap';


import '../App.css';

class WellnessPane extends Component{
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
        <h4>Wellness</h4>
        <hr />
        <PointerGauge name={"Wellness"} value={this.props.wellnessTotal} gaugeLowerBound={15} gaugeUpperBound={20} gaugeMaxValue={30} firstArc={"green"} secondArc={"orange"} thirdArc={"red"} />
        <Button onClick={this.showChart} color="info">View Detail</Button>
        </div>
      }
      {this.state.view === 'chart' &&
      <div>
        <h4>Wellness Trends</h4>
        <hr />
        <WellnessTrends  wellnessTrendsData={this.props.wellnessTrendsData}/>
        <hr />
        <h4>Individualised Wellness </h4>
        <hr />
        <BarChart barData={this.props.barData}/>
        <p>&nbsp;</p>
        <Button onClick={this.showGauge} color="info">View Summary</Button>
      </div>
      }
      </div>
      )}
  }


export default WellnessPane;
