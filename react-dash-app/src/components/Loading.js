import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ReactLoading from 'react-loading';
import Login from './Login';

const styles = {
    paperContainer: {
        height:600 ,
        backgroundImage: `url(${"./field-bg.59a5e231.jpg"})`
    }
};

class Loading extends Component {
  constructor(props){
    super(props);
    this.state = {
      tokenData: {},
      endPointSummary: {},
      endPointPlayers: {},
      endPointWellness: {},
      endPointWorkload: {},
      endPointRpe: {},
      players: {},
      summary: {},
      wellness: {},
      workload: {},
      rpe: {},
    }
    this.endLoadingHandler = this.endLoadingHandler.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount(){
  //get username and password from app.js
    this.getData(this.props.loginEmail, this.props.loginPass);
  }

  //send the state of the endpoints to app.js
  endLoadingHandler(){
    if (this.state.players === true &&
        this.state.summary === true &&
        this.state.wellness === true &&
        this.state.workload === true &&
        this.state.rpe === true) {
    this.props.loadingData( this.state.endPointSummary,
                            this.state.endPointPlayers,
                            this.state.endPointWellness,
                            this.state.endPointWorkload,
                            this.state.endPointRpe,
                            this.state.tokenData,
                          );
                        }
  }
  //fetching all the data from the endpoints and updating the states
  getData(email, password){

    // login, get the token and set token state


    //fetch players endpoint
    fetch('https://app.komodomonitr.com/api/v1/players',{
      method: 'get',
      headers: {'X-Auth-Token': this.props.loginToken}
    })
      .then(userResponse => userResponse.json())

      .then((findUserResponse) => {
        this.setState({ endPointPlayers: findUserResponse,
                        players: true})
        this.endLoadingHandler()
        })

    //fetch summary endpoint
    .then(token => {fetch('https://app.komodomonitr.com/api/v1/data/summary?userId=1',{
      method: 'get',
      headers: {'X-Auth-Token': this.props.loginToken}
    })
      .then(response => response.json())

      .then((summaryResponse)=> {
        this.setState({ endPointSummary: summaryResponse,
                        summary: true})
        this.endLoadingHandler()
      })})

    //fetch wellness endpoint
    .then(token => {fetch('https://app.komodomonitr.com/api/v1/data/wellness?userId=1',{
      method: 'get',
      headers: {'X-Auth-Token': this.props.loginToken}
    })
      .then(wellnessResponse => wellnessResponse.json())

      .then((wellnessResponse)=> {
        this.setState({ endPointWellness: wellnessResponse,
                        wellness: true})
        this.endLoadingHandler()
      })})

    //fetch workload endpoint
    .then(token => {fetch('https://app.komodomonitr.com/api/v1/data/train_load?userId=1',{
      method: 'get',
      headers: {'X-Auth-Token': this.props.loginToken}
    })
      .then(workloadResponse => workloadResponse.json())

      .then((workloadResponse)=> {
        this.setState({ endPointWorkload: workloadResponse,
                        workload: true})
        this.endLoadingHandler()
      })})

    //fetch rpe laod endpoint
    .then(token => {fetch('https://app.komodomonitr.com/api/v1/data/rpe_load?userId=1',{
      method: 'get',
      headers: {'X-Auth-Token': this.props.loginToken}
    })
      .then(rpeResponse => rpeResponse.json())

      .then((rpeResponse)=> {
        this.setState({ endPointRpe: rpeResponse,
                        rpe: true})
        //send the end point states to app.js
        this.endLoadingHandler()
      })})

}

render(){

  return(
    <div className="Login" style={styles.paperContainer}>
    <Container>
      <Row>
      <Col sm={10}>
          <img src={require('./komodo.png')} alt="Komodo Monitr" height="50" />
          <span className="BrandName">KOMODO </span><span className="SubBrand">MONITR</span>

      </Col>
      </Row>
      <Row>
      <Col className="text-center">
      <h5>Welcome to Komodo Monitr, please Log in</h5>
      </Col>
      </Row>
      <Row>
      <Col className="text-center">
              <p>Email</p>
              <input type="text"
                     readOnly
                     id="theInput"
                     value={this.props.email}
                      />
                <p>Password</p>
               <input type="text"
                      readOnly
                      id="theInput2"
                      value={this.props.pass}
                       />
                       <p/>
                  <input type="submit" disabled/>
              </Col>
            <button onClick={this.skipLogin}>
            </button>
        </Row>
        <Row>
          <Col xs="6">
          </Col>
          <Col>
          <ReactLoading type='spin' color='#d40000'/>
          </Col>
          </Row>
      </Container>
    </div>
  )
}
}

export default Loading;
