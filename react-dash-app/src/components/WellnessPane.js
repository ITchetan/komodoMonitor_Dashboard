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
    this.filterOption = this.filterOption.bind(this);
    // initial data for wellness trends
    this.tempWellnessData ={ labels: this.props.wellnessTrendsData.labels.slice(-14),
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
        <h3>Wellness</h3>
        <hr />
        <div className="d-flex justify-content-between">
        <Button onClick={this.showChart} color="info">View Detail</Button>
        </div>
        <hr />
        <PointerGauge name={"Wellness"} value={this.props.wellnessTotal} gaugeLowerBound={15}
        gaugeUpperBound={20} gaugeMaxValue={30} firstArc={"green"} secondArc={"orange"} thirdArc={"red"} />
      </div>
      }
      {this.state.view === 'chart' &&
      <div>
          <h3>Overall Wellness Trend</h3>
          <hr />
          <div className="d-flex justify-content-between">
          <Button onClick={this.showGauge} color="info">View Summary</Button>
          <select onChange = {this.filterOption} onLoad = {this.filterOption}>
            <option disabled >Select Range</option>
            <option value="-14" >Two Weeks</option>
            <option value="-30">Month</option>
            <option value="-90">Three Months</option>
            <option value="-180">Six Months</option>
            <option value="-365">Year</option>
          </select>
          </div >
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
