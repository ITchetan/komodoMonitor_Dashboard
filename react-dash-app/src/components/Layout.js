import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { HomeIcon, HeartPulseIcon, MedicalBagIcon, RunFastIcon } from 'mdi-react';
import GaugeChart from './GaugeChart'
import Insight from './Insight'
import '../App.css';



import BarChart from './wellnessChart'
import WorkloadChart from './workloadChart'
import RpeChart from './rpeChart'
import PointerGauge from './PointerGauge'
import PlayerProfile from './PlayerProfile'
import WellnessLiquid from './WellnessLiquid'
import WorkloadLiquid from './WorkloadLiquid'
import RpeLiquid from './RpeLiquid'


import WellnessPane from './WellnessPane'
import WorkloadPane from './WorkloadPane'
import RpePane from './RpePane'

class Layout extends Component{
  constructor(props){
    super(props);
    this.state = {
      // chart data will be generated in app and passed in chart property, following is telling chart that data will come from property
      barData: props.barData,
      workloadData: props.workloadData,
      rpeData: props.rpeData,
      insightsData: props.insightsData,
      playerFirstData: props.playerFirstData,
      playerLastData: props.playerLastData
    }

  }





  // Turn overall numbers into percentages with no decimal places
  render() {
    let komodoScore = this.props.komodoNumber.total
    komodoScore = komodoScore*100
    komodoScore = komodoScore.toFixed(0)

    let workloadScore = this.props.komodoNumber.workload
    workloadScore = workloadScore*100

    let wellnessScore = this.props.komodoNumber.wellness
    wellnessScore = wellnessScore*100

    let rpeScore = this.props.komodoNumber.rpe
    rpeScore = rpeScore*100

    return (
  <div className="Layout">
  <Container fluid={false}>


    <Row>&nbsp;</Row>
    <Row className="d-flex">
      <Col sm={2} className="d-flex">
        <Col className="Column">
        <div style={{ textAlign: 'center' }}>

            {this.props.view === "home" &&
          <HomeIcon size={60} color= '#d40000' />}
            {this.props.view !== "home" &&
          <a onClick={this.props.changeHome}><HomeIcon size={60} color="#C0C0C0"  /></a>}
          <h5>Summary</h5>
          <hr />
        </div>
        <div style={{ textAlign: 'center' }}>

          {this.props.view === "workload" &&
          <HeartPulseIcon size={60} color="#d40000" />}
          {this.props.view !== "workload" &&
          <a onClick={this.props.changeWorkload}><HeartPulseIcon size={60} color="#C0C0C0" className="icon" /></a>}
          <h5>Training Load</h5>
          <hr />
        </div>
        <div style={{ textAlign: 'center' }}>
          {this.props.view === "wellness" &&
          <MedicalBagIcon size={60} color="#d40000" />}
          {this.props.view !== "wellness" &&
          <a onClick={this.props.changeWellness}><MedicalBagIcon size={60} color="#C0C0C0"  /></a>}
          <h5>Wellness</h5>
          <hr />
        </div>
        <div style={{ textAlign: 'center' }}>

          {this.props.view === "rpe" &&
          <RunFastIcon size={60} color="#d40000" />}
          {this.props.view !== "rpe" &&
          <a onClick={this.props.changeRpe}><RunFastIcon size={60} color="#C0C0C0"  /></a>}
          <h5>RPE Load</h5>
          <hr />
        </div>

      </Col>
      </Col>

      <Col sm={6} className="d-flex">
        <Col className="text-center Column">
          {this.props.view === "home" &&
          <div>
              <div>
                <h3>Welcome back, Chris</h3>
                <hr />
                <h4>Your Komodo Number is</h4>
                <GaugeChart value={komodoScore} />
              </div>
              <hr />
              <div>
                <Row>
                  <Col sm={4}>
                  <WorkloadLiquid value={workloadScore}/>
                  </Col>
                  <Col sm={4}>
                  <WellnessLiquid value={wellnessScore}/>
                  </Col>
                  <Col sm={4}>
                  <RpeLiquid value={rpeScore}/>
                  </Col>
                </Row>
              </div>
          </div>}

          {this.props.view === "wellness" &&
            <WellnessPane wellnessTotal={this.props.wellnessTotal} barData={this.props.barData}/>
          }

          {this.props.view === "workload" &&
          <WorkloadPane workloadSummary={this.props.workloadSummary} workloadData={this.props.workloadData} />
          }

          {this.props.view === "rpe" &&
          <RpePane rpeSummary={this.props.rpeSummary} rpeData={this.props.rpeData} />
          }

          {this.props.view === "profile" &&
          <div>
            <h3>My Profile</h3>
            <hr />
            <PlayerProfile
             playerFirstData={this.props.playerFirstData}
             playerLastData={this.props.playerLastData}/>
          </div>}

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
