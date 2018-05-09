import React, {Component} from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

import WellnessGauge from './WellnessGauge';
import WorkloadGauge from './WorkloadGauge';
import RPEGauge from './RPEGauge';
import BarChart from './wellnessChart';
import WorkloadChart from  './workloadChart' ;
import RpeChart from  './rpeChart' ;



class Layout extends Component{
  constructor(props){
    super(props);
    this.state = {
      // chart data will be generated in app and passed in chart property, following is telling chart that data will come from property
      barData:props.barData,
      workloadData:props.workloadData,
      rpeData:props.rpeData
    }
  }

  //chart is drown here
  render()
  {
    return (
  <div className="Layout">
  <Grid>
    <Row>
      <Col sm={6}>
        <Panel><Panel.Body><BarChart barData={this.state.barData}/></Panel.Body></Panel>
      </Col>
      <Col sm={6}>
        <Panel><Panel.Body><WellnessGauge /></Panel.Body></Panel>
      </Col>
    </Row>
    <Row>
      <Col sm={6}>
        <Panel><Panel.Body><WorkloadChart   workloadData={this.state.workloadData} /></Panel.Body></Panel>
      </Col>
      <Col sm={6}>
        <Panel><Panel.Body><WorkloadGauge /></Panel.Body></Panel>
      </Col>
    </Row>
    <Row>
      <Col sm={6}>
        <Panel><Panel.Body><RpeChart   rpeData={this.state.rpeData} /></Panel.Body></Panel>
      </Col>
      <Col sm={6}>
        <Panel><Panel.Body><RPEGauge /></Panel.Body></Panel>
      </Col>
    </Row>
    </Grid>
    </div>
  );
}
}
  export default Layout;
