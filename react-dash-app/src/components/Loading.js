import React, { Component } from 'react';

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
    this.props.loadingData(this.state.endPointSummary,
                            this.state.endPointPlayers,
                            this.state.endPointWellness,
                            this.state.endPointWorkload,
                            this.state.endPointRpe,);
  }
  //fetching all the data from the endpoints and updating the states
  getData(email, password){

    // login, get the token and set token state
    fetch('https://app.komodomonitr.com/api/v1/users/login', {
      body: JSON.stringify({
        "email": email,
        "password": password
      }), // must match 'Content-Type' header
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
    })
    .then(response => response.json())

    .then(data => this.setState({tokenData: data.token}))

    //fetch players endpoint
    .then(token => {fetch('https://app.komodomonitr.com/api/v1/players',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
    })
      .then(userResponse => userResponse.json())

      .then((findUserResponse) => {
        this.setState({ endPointPlayers: findUserResponse })
        })})

    //fetch summary endpoint
    .then(token => {fetch('https://app.komodomonitr.com/api/v1/data/summary?userId=4',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
    })
      .then(response => response.json())

      .then((summaryResponse)=> {
        this.setState({ endPointSummary: summaryResponse })
      })})

    //fetch wellness endpoint
    .then(token => {fetch('https://app.komodomonitr.com/api/v1/data/wellness?userId=4',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
    })
      .then(wellnessResponse => wellnessResponse.json())

      .then((wellnessResponse)=> {
        this.setState({ endPointWellness: wellnessResponse })
      })})

    //fetch workload endpoint
    .then(token => {fetch('https://app.komodomonitr.com/api/v1/data/train_load?userId=4',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
    })
      .then(workloadResponse => workloadResponse.json())

      .then((workloadResponse)=> {
        this.setState({ endPointWorkload: workloadResponse })
      })})

    //fetch rpe laod endpoint
    .then(token => {fetch('https://app.komodomonitr.com/api/v1/data/rpe_load?userId=4',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
    })
      .then(rpeResponse => rpeResponse.json())

      .then((rpeResponse)=> {
        this.setState({ endPointRpe: rpeResponse })
      //send the end point states to app.js
        this.endLoadingHandler()
      })})

}

render(){

  return(
    <div>
    <p>loading...</p>
    </div>
  )
}
}

export default Loading;
