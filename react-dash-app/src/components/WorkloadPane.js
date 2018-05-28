import React, {Component} from 'react';
import WorkloadChart from './workloadChart';
import PointerGauge from './PointerGauge'
import { Button, Row, Col  } from 'reactstrap';


import '../App.css';

class WorkloadPane extends Component{
  constructor(props){
    super(props);
    this.state = {
      view: 'gauge'
    }
    this.showGauge = this.showGauge.bind(this);
    this.showChart = this.showChart.bind(this);
    this.filterOption = this.filterOption.bind(this);
    // initial data for wellness trends
    this.tempWorkloadData ={ labels: this.props.workloadData.labels, datasets: this.props.workloadData.datasets};

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
    this.tempWorkloadData ={ labels: this.props.workloadData.labels,
                            datasets: this.props.workloadData.datasets};

    // If selected value is less than total number then do this
    if(Math.abs(selectedVal) <= this.props.workloadData.labels.length)
    {
    let tempLabels = this.tempWorkloadData.labels;
    this.tempWorkloadData.labels= tempLabels.slice(selectedVal);
    }
    this.showChart();
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
        <Row>
        <Col sm={2} >
          <Button onClick={this.showGauge} color="info">View Summary</Button>
        </Col>
        <Col sm={7}>
          <h4>Workload</h4>
        </Col>
        <Col sm={3}>
          <select onChange = {this.filterOption} onLoad = {this.filterOption}>
            <option disabled >Select Range</option>
              <option value="-30" >Month</option>
              <option value="-90">Three Months</option>
              <option value="-180">Six Months</option>
              <option value="-365">Year</option>
          </select>
        </Col>
        </Row>
        <hr />
          <WorkloadChart workloadData={this.tempWorkloadData}/>
      </div>
      }
      </div>

      )}
  }

export default WorkloadPane;
