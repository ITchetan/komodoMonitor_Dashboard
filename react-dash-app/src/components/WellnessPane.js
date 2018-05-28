import React, {Component} from 'react';
import BarChart from './wellnessChart';
import WellnessTrends from './WellnessTrends';
import PointerGauge from './PointerGauge'
import { Button } from 'reactstrap';
import {  Row, Col } from 'reactstrap';
import '../App.css';


class WellnessPane extends Component{
  constructor(props){
    super(props);
    this.state = {
      view: 'gauge'
    }
    this.showGauge = this.showGauge.bind(this);
    this.showChart = this.showChart.bind(this);
    this.filterOption = this.filterOption.bind(this);
    // initial data for wellness trends
    this.tempWellnessData ={ labels: this.props.wellnessTrendsData.labels.slice(-30),
                            datasets: this.props.wellnessTrendsData.datasets};
  }

  showGauge() {
    this.setState({ view: 'gauge' })
  }

  showChart() {
    this.setState({ view: 'chart' })
  }

// filter data to show in chart depend on selection
  filterOption(e) {
    let selectedVal=parseInt(e.target.value,0);
    this.tempWellnessData ={ labels: this.props.wellnessTrendsData.labels,
                            datasets: this.props.wellnessTrendsData.datasets};

    // If selected value is less than total number then do this
    if(Math.abs(selectedVal) <= this.props.wellnessTrendsData.labels.length)
    {
    let tempLabels = this.tempWellnessData.labels;
    this.tempWellnessData.labels= tempLabels.slice(selectedVal);
    }
    this.showChart();
  }



  render() {
    return (
      <div>
      {this.state.view === 'gauge' &&
      <div>
        <Row>
        <Col sm={2} >
        <Button onClick={this.showChart} color="info">View Detail</Button>
        </Col>
        <Col sm={8}>
        <h4>Wellness</h4>
        </Col>
        </Row>
        <hr />
        <PointerGauge name={"Wellness"} value={this.props.wellnessTotal} gaugeLowerBound={15}
        gaugeUpperBound={20} gaugeMaxValue={30} firstArc={"green"} secondArc={"orange"} thirdArc={"red"} />
        </div>
      }
      {this.state.view === 'chart' &&
      <div>
        <Row>
        <Col sm={2} >
          <Button onClick={this.showGauge} color="info">View Summary</Button>
        </Col>
        <Col sm={7}>
          <h4>Overall Wellness Trend</h4>
        </Col>
        <Col sm={3}>
        <select onChange = {this.filterOption} onLoad = {this.filterOption}>
          <option disabled >Select Range</option>
            <option value="-30" >Month</option>
            <option value="-90" >Three Months</option>
            <option value="-180">Six Months</option>
            <option value="-365">Year</option>
        </select>
        </Col>
        </Row>
        <hr />
          <WellnessTrends  wellnessTrendsData={this.tempWellnessData}/>
        <hr />
          <h4>Individualised Wellness </h4>
        <hr />
          <BarChart barData={this.props.barData}/>
      </div>
      }
      </div>
      )}
  }


export default WellnessPane;
