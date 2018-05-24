import React, { Component } from 'react';

class LoadingCookie extends Component {
  constructor(props){
    super(props);
    this.state = {
      tokenData: document.cookie,
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
    console.log(this.state.tokenData)
    this.getData();
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

    //fetch players endpoint
    fetch('https://app.komodomonitr.com/api/v1/players',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
    })
      .then(userResponse => userResponse.json())

      .then((findUserResponse) => {
        this.setState({ endPointPlayers: findUserResponse,
                        players: true})
        this.endLoadingHandler()
        })

    //fetch summary endpoint
    .then(token => {fetch('https://app.komodomonitr.com/api/v1/data/summary?userId=4',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
    })
      .then(response => response.json())

      .then((summaryResponse)=> {
        this.setState({ endPointSummary: summaryResponse,
                        summary: true})
        this.endLoadingHandler()
      })})

    //fetch wellness endpoint
    .then(token => {fetch('https://app.komodomonitr.com/api/v1/data/wellness?userId=4',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
    })
      .then(wellnessResponse => wellnessResponse.json())

      .then((wellnessResponse)=> {
        this.setState({ endPointWellness: wellnessResponse,
                        wellness: true})
        this.endLoadingHandler()
      })})

    //fetch workload endpoint
    .then(token => {fetch('https://app.komodomonitr.com/api/v1/data/train_load?userId=4',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
    })
      .then(workloadResponse => workloadResponse.json())

      .then((workloadResponse)=> {
        this.setState({ endPointWorkload: workloadResponse,
                        workload: true})
        this.endLoadingHandler()
      })})

    //fetch rpe laod endpoint
    .then(token => {fetch('https://app.komodomonitr.com/api/v1/data/rpe_load?userId=4',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
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
    <div>
    <p>loadingCookie...</p>
    </div>
  )
}
}

export default LoadingCookie;
