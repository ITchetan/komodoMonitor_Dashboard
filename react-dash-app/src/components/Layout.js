import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { HomeIcon, HeartPulseIcon, MedicalBagIcon, RunFastIcon } from 'mdi-react';
import CircularProgressBar from 'react-circular-progressbar'
import Insight from './Insight'
import '../App.css';
import PlayerProfile from './PlayerProfile'
import Liquid from './LiquidChart'


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
      playerLastData: props.playerLastData,
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

    let strokeColour
    if (komodoScore <= 75) {
      strokeColour =  'progressbar-red'
    } else if (komodoScore > 75 & komodoScore <= 99) {
      strokeColour = 'progressbar-orange'
    } else {
      strokeColour =  'progressbar-green'
    }


    return (
  <div className="Layout">

  <Container fluid={true}>
    <Row className='d-flex'>&nbsp;</Row>
    <Row className="d-flex">
      <Col sm={3} lg={2} className="d-flex">
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

      <Col sm={5} lg={6} className="d-flex">
        <Col className="text-center Column">
          {this.props.view === "home" &&
          <div>
              <div>
                <h3>Welcome back, {this.props.playerFirstData[0]}</h3>
                <hr />
                <h5>Your overall score is {komodoScore}%.</h5>
                <Col xs={{ size:4, offset: 4}}>
                  <CircularProgressBar
                  percentage={komodoScore}
                  initialAnimation={'true'}
                  strokeWidth={'10'}
                  className={strokeColour}
                   />
                </Col>
              </div>
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
            <WellnessPane wellnessTotal={this.props.wellnessTotal} barData={this.props.barData}
            wellnessTrendsData={this.props.wellnessTrendsData}/>
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
             logout={this.props.logout}
             loginToken={this.props.loginToken}
             playerImage={this.props.playerImage}
             playerFirstData={this.props.playerFirstData}
             playerLastData={this.props.playerLastData}/>
          </div>}

        </Col>
      </Col>
      <Col sm={4} className="d-flex">
        <Col className="text-center Column">
          <h3>Insights</h3>
          <hr />
          <Row>
            <Col>
            <Insight insight={this.props.insightsDescriptionData[0]}  insightValue= {this.props.insightsValueData[0]}/>
            <br />
            </Col>
          </Row>
          <Row>
            <Col>
            <Insight insight={this.props.insightsDescriptionData[1]}  insightValue= {this.props.insightsValueData[1]}/>
            <br />
            </Col>
          </Row>
          <Row>
            <Col>
            <Insight insight={this.props.insightsDescriptionData[2]}  insightValue= {this.props.insightsValueData[2]}/>
            <br />
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
