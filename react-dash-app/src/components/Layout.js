import React, {Component} from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader, Button } from 'reactstrap';
import { HomeIcon, HeartPulseIcon, MedicalBagIcon, RunFastIcon } from 'mdi-react';
import GaugeChart from './GaugeChart'
import Insight from './Insight'
import '../App.css';
import BarChart from './wellnessChart'
import WorkloadChart from './workloadChart'

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
    console.log(this.props.insightsDescriptionData[0]);
    console.log(this.props.view);
    return (
  <div className="Layout">
  <Container fluid={false}>
    <Row>&nbsp;</Row>
    <Row className="d-flex">
      <Col sm={2} className="d-flex">
        <Col className="Column">
        <div style={{ textAlign: 'center' }}>
          <h5>Summary</h5>
            {this.props.view === "home" &&
          <HomeIcon size={60} color= '#d40000' />}
            {this.props.view !== "home" &&
          <a onClick={this.props.changeHome}><HomeIcon size={60} color="#C0C0C0"  /></a>}
        </div>
        <div style={{ textAlign: 'center' }}>
          <h5>Training Load</h5>
          {this.props.view === "workload" &&
          <HeartPulseIcon size={60} color="#d40000" />}
          {this.props.view !== "workload" &&
          <a onClick={this.props.changeWorkload}><HeartPulseIcon size={60} color="#C0C0C0" className="icon" /></a>}
        </div>
        <div style={{ textAlign: 'center' }}>
          <h5>Wellness</h5>
          {this.props.view === "wellness" &&
          <MedicalBagIcon size={60} color="#d40000" />}
          {this.props.view !== "wellness" &&
          <a onClick={this.props.changeWellness}><MedicalBagIcon size={60} color="#C0C0C0"  /></a>}
        </div>
        <div style={{ textAlign: 'center' }}>
          <h5>RPE Load</h5>
          {this.props.view === "rpe" &&
          <RunFastIcon size={60} color="#d40000" />}
          {this.props.view !== "rpe" &&
          <a onClick={this.props.changeRpe}><RunFastIcon size={60} color="#C0C0C0"  /></a>}
        </div>
        </Col>
      </Col>

      <Col sm={6} className="d-flex">
        <Col className="text-center Column">
          {this.props.view === "home" &&
            <div>
              <h3>Welcome back, John Doe</h3>
              <h4>Your Komodo Number is 33</h4>
              <p>&nbsp;</p>
              <GaugeChart />
            </div>}
          {this.props.view === "wellness" &&
            <Card>
            <CardHeader><h4>Wellness</h4></CardHeader>
            <CardBody><BarChart barData={this.props.barData}/></CardBody>
            </Card>}
          {this.props.view === "workload" &&
            <Card>
            <CardHeader><h4>Workload</h4></CardHeader>
            <CardBody><WorkloadChart workloadData={this.props.workloadData}/></CardBody>
            </Card>}
        </Col>
      </Col>
      <Col sm={4} className="d-flex">
        <Col className="Column">
          <Row>
            <Col>
            <Insight insight={this.props.insightsDescriptionData[0]} insightValue= {this.props.insightsValueData[0]} />
            </Col>
          </Row>
          <Row>
            <Col>
            <Insight insight={this.props.insightsDescriptionData[1]} insightValue ={this.props.insightsValueData[1]} />
            </Col>
          </Row>
          <Row>
            <Col>
            <Insight insight={this.props.insightsDescriptionData[2]} insightValue={this.props.insightsValueData[2]} />
            </Col>
          </Row>
        </Col>
      </Col>
    </Row>
    </Container>

    </div>
  );
}
}
  export default Layout;
