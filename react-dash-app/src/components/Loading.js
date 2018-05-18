import React, { Component } from 'react';

class Loading extends Component {
  constructor(props){
    super(props);
    this.state = {
      tokenData: {},
      wellnessData: {},
    }
    this.endLoadingHandler = this.endLoadingHandler.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount(){
    this.getData(this.props.loginEmail, this.props.loginPass);
  }

  endLoadingHandler(){
    this.props.loadingData(this.state.wellnessData);
  }

  getData(email, password){
    // this.setState({ login: "false"})
    let dataWellness = {}
    let dataworkload = {}
    let datainsights = {}

    fetch('http://app.komodomonitr.com/api/v1/users/login', {
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


    // .then(token => {fetch('http://app.komodomonitr.com/api/v1/players',{
    //   method: 'get',
    //   headers: {'X-Auth-Token': this.state.tokenData}
    // })
    //   .then(userResponse => userResponse.json())
    //
    //   .then((findUserResponse) =>{
    //     console.log(findUserResponse)
    //     let dataPlayer = findUserResponse
    //     })})

    .then(token => {fetch('http://app.komodomonitr.com/api/v1/data/summary?userId=4',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
    })
    .then(response => response.json())

    .then((findresponse)=>
    {
      console.log(findresponse.wellness)
      dataWellness = findresponse.wellness
      dataworkload = findresponse.training_load
      datainsights = findresponse.insights
      console.log(dataWellness)
      console.log(dataworkload)
      console.log(findresponse)
      this.setState({wellnessData: dataWellness })
      this.endLoadingHandler()
    })
  })
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
