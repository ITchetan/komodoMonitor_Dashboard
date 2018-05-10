import React, {Component} from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import '../App.css';

// Import React components
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
      <Panel>
      <Panel.Heading><h4>Wellness</h4></Panel.Heading>
      <Panel.Body>
        <Col sm={6}>
          <WellnessFlip barData={this.state.barData}/>
        </Col>
        <Col sm={6}>
          <ul>
            <li><h4>Sleep should be increased by 20%</h4></li>
            <li><h4>Nutrition should be improved</h4></li>
          </ul>
        </Col>
      </Panel.Body>
      </Panel>
    </Row>
    <Row>
      <Panel>
        <Panel.Heading><h4>Workload</h4></Panel.Heading>
          <Panel.Body>
            <Col sm={6}>
              <WorkloadFlip workloadData={this.state.workloadData} />
            </Col>
            <Col sm={6}>
              <ul>
                <li><h4>Total distance should be decreased by 15%</h4></li>
              </ul>
            </Col>
          </Panel.Body>
        </Panel>
    </Row>
    <Row>
      <Panel>
        <Panel.Heading><h4>RPE</h4></Panel.Heading>
          <Panel.Body>
            <Col sm={6}>
              <RpeFlip rpeData={this.state.rpeData} />
            </Col>
            <Col sm={6}>
            </Col>
          </Panel.Body>
        </Panel>
    </Row>
    </Grid>
    </div>
  );
}
}
  export default Layout;
