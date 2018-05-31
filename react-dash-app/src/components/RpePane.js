import React, {Component} from 'react';
import RpeChart from './rpeChart';
import PointerGauge from './PointerGauge'
import { Button} from 'reactstrap';


import '../App.css';

class RpePane extends Component{
  constructor(props){
    super(props);
    this.state = {
      view: 'gauge'
    }
    this.showGauge = this.showGauge.bind(this);
    this.showChart = this.showChart.bind(this);
    this.filterOption = this.filterOption.bind(this);
    // initial data for wellness trends
    this.tempRpeData ={ labels: this.props.rpeData.labels.slice(-14),
                            datasets: this.props.rpeData.datasets};
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
    this.tempRpeData ={ labels: this.props.rpeData.labels,
                            datasets: this.props.rpeData.datasets};

    // If selected value is less than total number then do this
    if(Math.abs(selectedVal) <= this.props.rpeData.labels.length)
    {
    let tempLabels = this.tempRpeData.labels;
    this.tempRpeData.labels= tempLabels.slice(selectedVal);
    }
    this.showChart();
  }


  render() {
    return (
      <div>
        {this.state.view === 'gauge' &&
        <div >
          <h3>RPE</h3>
          <hr />
          <div className="d-flex justify-content-between">
            <Button onClick={this.showChart} color="info" >View Detail</Button>
          </div>
          <hr />
          <PointerGauge name={"RPE"} value={this.props.rpeSummary.value}
          gaugeLowerBound={this.props.rpeSummary.min} gaugeUpperBound={this.props.rpeSummary.max}
          gaugeMaxValue={10000} firstArc={"blue"} secondArc={"green"} thirdArc={"red"} />
        </div>
        }

        {this.state.view === 'chart' &&
        <div>
          <h3>RPE</h3>
          <hr />
          <div className="d-flex justify-content-between">
            <Button onClick={this.showGauge} color="info">View Summary</Button>
            <select onChange = {this.filterOption}>
                <option disabled >Select Range</option>
                <option value="-14" >Two Weeks</option>
                <option value="-30">Month</option>
                <option value="-90">Three Months</option>
                <option value="-180">Six Months</option>
                <option value="-365">Year</option>
            </select>
          </div>
          <hr />
            <RpeChart rpeData={this.tempRpeData}/>
          </div>
          }
      </div>

      )}
  }


export default RpePane;
