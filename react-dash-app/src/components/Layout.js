import React, {Component} from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

// import WellnessGauge from './WellnessGauge';
import WorkloadGauge from './WorkloadGauge';
import RPEGauge from './RPEGauge';
import BarChart from './wellnessChart';
import WorkloadChart from  './workloadChart' ;
import RpeChart from  './rpeChart' ;
import WellnessFlip from './WellnessFlip';
import WorkloadFlip from './WorkloadFlip';
import RpeFlip from './RPEFlip';

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
        <Panel><Panel.Body><WellnessFlip barData={this.state.barData}/></Panel.Body></Panel>
      </Col>
      <Col sm={6}>
        <Panel><Panel.Body><h3>Insights</h3>
        <ul>
          <li>Sleep should be increased by 20%</li>
          <li>Nutrition should be improved</li>
        </ul>
        </Panel.Body></Panel>
      </Col>
    </Row>
    <Row>
      <Col sm={6}>
        <Panel><Panel.Body><WorkloadFlip workloadData={this.state.workloadData} /></Panel.Body></Panel>
      </Col>
      <Col sm={6}>
        <Panel><Panel.Body><h3>Insights</h3>
        <ul>
          <li>Total distance should be decreased by 15%</li>
          </ul>
        </Panel.Body></Panel>
      </Col>
    </Row>
    <Row>
      <Col sm={6}>
        <Panel><Panel.Body><RpeFlip rpeData={this.state.rpeData} /></Panel.Body></Panel>
      </Col>
      <Col sm={6}>
        <Panel><Panel.Body>
        <h3>Insights</h3>
        </Panel.Body></Panel>
      </Col>
    </Row>
    </Grid>
    </div>
  );
}
}
  export default Layout;
