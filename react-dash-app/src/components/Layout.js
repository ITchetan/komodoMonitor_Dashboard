import React, {Component} from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader, Button } from 'reactstrap';
import { HomeIcon, HeartPulseIcon, MedicalBagIcon, RunFastIcon } from 'mdi-react';
import Insight from './Insight'
import '../App.css';

// Import React components
// import WellnessFlip from './WellnessFlip';
// import WorkloadFlip from './WorkloadFlip';
// import RpeFlip from './RPEFlip';

class Layout extends Component{
  constructor(props){
    super(props);
    this.state = {
      // chart data will be generated in app and passed in chart property, following is telling chart that data will come from property
      barData: props.barData,
      workloadData: props.workloadData,
      rpeData: props.rpeData,
      insightsData: props.insightsData,
    }

  }





  //chart is drown here
  render()
  {
    console.log(this.props.workloadData);
    console.log(this.props.view);
    return (
  <div className="Layout">
  <Container>
    <Row>
      <Col sm={2}>
      <div className="Navigator">
        <div style={{ textAlign: 'center' }}>
          <h4>Summary</h4>
            {this.props.view === "home" &&
          <HomeIcon size={72} color= '#d40000' />}
            {this.props.view !== "home" &&
          <a onClick={this.props.changeHome}><HomeIcon size={72} color="#C0C0C0" /></a>}
        </div>
        <div style={{ textAlign: 'center' }}>
          <h4>Workload</h4>
          {this.props.view === "workload" &&
          <HeartPulseIcon size={72} color="#d40000" />}
          {this.props.view !== "workload" &&
          <a onClick={this.props.changeWorkload}><HeartPulseIcon size={72} color="#C0C0C0" /></a>}
        </div>
        <div style={{ textAlign: 'center' }}>
          <h4>Wellness</h4>
          {this.props.view === "wellness" &&
          <MedicalBagIcon size={72} color="#d40000" />}
          {this.props.view !== "wellness" &&
          <a onClick={this.props.changeWellness}><MedicalBagIcon size={72} color="#C0C0C0" /></a>}
        </div>
        <div style={{ textAlign: 'center' }}>
          <h4>RPE</h4>
          {this.props.view === "rpe" &&
          <RunFastIcon size={72} color="#d40000" />}
          {this.props.view !== "rpe" &&
          <a onClick={this.props.changeRpe}><RunFastIcon size={72} color="#C0C0C0" /></a>}
        </div>
      </div>
      </Col>
      <Col sm={6}>
      <Card>
      <CardHeader>Placeholder text</CardHeader>
      <CardBody>This is a placeholder</CardBody>
      </Card>
      </Col>
      <Col sm={4}>
      <Container>
        <Row>
          <Col>
          <Insight insight="Placeholder" insightValue="-15" />
          </Col>
        </Row>
        <Row>
          <Col>
          <Insight insight="Placeholder" insightValue ="20" />
          </Col>
        </Row>
        <Row>
          <Col>
          <Insight insight="Placeholder" insightValue="10" />
          </Col>
        </Row>
      </Container>
      </Col>
    </Row>
    </Container>
    </div>
  );
}
}
  export default Layout;
