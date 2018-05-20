import React, { Component } from 'react';

class Loading extends Component {
  constructor(props){
    super(props);
    this.state = {
      tokenData: {},
      endPointSummary: {},
      endPointPlayers: {},
    }
    this.endLoadingHandler = this.endLoadingHandler.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount(){
    this.getData(this.props.loginEmail, this.props.loginPass);
  }

  endLoadingHandler(){
    this.props.loadingData(this.state.endPointSummary, this.state.endPointPlayers);
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

      .then((findUserResponse) =>{
        this.setState({ endPointPlayers: findUserResponse })
        })})

    .then(token => {fetch('https://app.komodomonitr.com/api/v1/data/summary?userId=4',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
    })
    .then(response => response.json())

    .then((findresponse)=>
    {
      this.setState({ endPointSummary: findresponse })


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
