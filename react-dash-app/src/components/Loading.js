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
    this.getData(this.props.loginEmail, this.props.loginPass);
  }

  endLoadingHandler(){
    this.props.loadingData(this.state.endPointSummary,
                            this.state.endPointPlayers,
                            this.state.endPointWellness,
                            this.state.endPointWorkload,);
  }

  getData(email, password){

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


    .then(token => {fetch('https://app.komodomonitr.com/api/v1/players',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
    })
      .then(userResponse => userResponse.json())

      .then((findUserResponse) => {
        this.setState({ endPointPlayers: findUserResponse })
        })})

    .then(token => {fetch('https://app.komodomonitr.com/api/v1/data/summary?userId=4',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
    })
      .then(response => response.json())

      .then((summaryResponse)=> {
        this.setState({ endPointSummary: summaryResponse })

      })})

    .then(token => {fetch('https://app.komodomonitr.com/api/v1/data/wellness?userId=4',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
    })
      .then(wellnessResponse => wellnessResponse.json())

      .then((wellnessResponse)=> {
        this.setState({ endPointWellness: wellnessResponse })
      })})

    .then(token => {fetch('https://app.komodomonitr.com/api/v1/data/train_load?userId=4',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
    })
      .then(workloadResponse => workloadResponse.json())

      .then((workloadResponse)=> {
        this.setState({ endPointWorkload: workloadResponse })
      })})

    .then(token => {fetch('https://app.komodomonitr.com/api/v1/data/rpe_load?userId=4',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
    })
      .then(rpeResponse => rpeResponse.json())

      .then((rpeResponse)=> {
        this.setState({ endPointRpe: rpeResponse })
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
