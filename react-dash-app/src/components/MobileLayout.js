import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { HomeIcon, HeartPulseIcon, MedicalBagIcon, RunFastIcon, AccountIcon } from 'mdi-react';
import CircularProgressBar from 'react-circular-progressbar'
import Insight from './Insight'

import '../App.css';
import 'react-circular-progressbar/dist/styles.css'


import Liquid from './LiquidChart'
import PlayerProfile from './PlayerProfile'

import WellnessPane from './WellnessPane'
import WorkloadPane from './WorkloadPane'
import RpePane from './RpePane'

class MobileLayout extends Component{
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

    <Row className="Column">

      <Col xs={{ size:2, offset:1 }}>
        {this.props.view === "home" &&
        <HomeIcon size={36} color= '#d40000' />}
        {this.props.view !== "home" &&
        <a onClick={this.props.changeHome}><HomeIcon size={36} color="#C0C0C0"  /></a>}
      </Col>

      <Col xs={2}>
        {this.props.view === "workload" &&
        <HeartPulseIcon size={36} color="#d40000" />}
        {this.props.view !== "workload" &&
        <a onClick={this.props.changeWorkload}><HeartPulseIcon size={36} color="#C0C0C0" className="icon" /></a>}
      </Col>

      <Col xs={2}>
        {this.props.view === "wellness" &&
        <MedicalBagIcon size={36} color="#d40000" />}
        {this.props.view !== "wellness" &&
        <a onClick={this.props.changeWellness}><MedicalBagIcon size={36} color="#C0C0C0"  /></a>}
      </Col>

      <Col xs={2}>
        {this.props.view === "rpe" &&
        <RunFastIcon size={36} color="#d40000" />}
        {this.props.view !== "rpe" &&
        <a onClick={this.props.changeRpe}><RunFastIcon size={36} color="#C0C0C0"  /></a>}
      </Col>

      <Col xs={2}>
        {this.props.view === "profile" &&
        <AccountIcon size={36} color="#d40000" />}
        {this.props.view !== "profile" &&
        <a onClick={this.props.changeProfile}><AccountIcon size={36} color="#C0C0C0"  /></a>}
      </Col>

      </Row>

      <Row>&nbsp;</Row>

      <Row className="Column">

      <Col xs={12} className="text-center">

      {this.props.view === "home" &&
        <div>
          <h4>Welcome back, Chris</h4>
          <hr />
          <Col xs={{ size:6, offset: 3}}>
          <CircularProgressBar percentage={komodoScore} />
          </Col>
          <hr />
          <div>
            <Row>
              <Col sm={4}>
              <Liquid value={workloadScore} legend={'Training'}/>
              </Col>
              <Col sm={4}>
              <Liquid value={wellnessScore} legend={'Wellness'}/>
              </Col>
              <Col sm={4}>
              <Liquid value={rpeScore} legend={'RPE'}/>
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
      </Row>

      <Row>&nbsp;</Row>

      <Row className="Column">
      <Col>

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
    </Row>
    </Container>

    </div>
  );
}
}

export default MobileLayout;
