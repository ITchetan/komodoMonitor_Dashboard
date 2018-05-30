import React, { Component } from 'react';
import Login from './Login';

class Loading extends Component {
  constructor(props){
    super(props);
    this.state = {
      tokenData: {},
      endPointSummary: {},
      endPointPlayers: {},
      endPointPlayerImage: {},
      endPointWellness: {},
      endPointWorkload: {},
      endPointRpe: {},
      players: {},
      playerImage: {},
      summary: {},
      wellness: {},
      workload: {},
      rpe: {},
      isLoading: true,

    }
    this.endLoadingHandler = this.endLoadingHandler.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount(){
  //get username and password from app.js

    this.getData();
  }

  //send the state of the endpoints to app.js
  endLoadingHandler(){
    if (this.state.players === true &&
        this.state.summary === true &&
        this.state.wellness === true &&
        this.state.workload === true &&
        this.state.rpe === true &&
        this.state.playerImage === true) {
    this.props.loadingData( this.state.endPointSummary,
                            this.state.endPointPlayers,
                            this.state.endPointPlayerImage,
                            this.state.endPointWellness,
                            this.state.endPointWorkload,
                            this.state.endPointRpe,
                          );
                        }
  }
  //fetching all the data from the endpoints and updating the states
  getData(){

    // login, get the token and set token state


    //fetch players endpoint
    fetch('https://app.komodomonitr.com/api/v1/players',{
      method: 'get',
      headers: {'X-Auth-Token': this.props.loginToken}
    })
      .then((userResponse) => {
      if (userResponse.ok) {
        return userResponse.json();
      } else {
        throw new Error;
      }
    })
      .then((findUserResponse) => {
        this.setState({ endPointPlayers: findUserResponse,
                        players: true})
        this.endLoadingHandler()
        })
      .catch((error) => {
        this.props.loadingFailed()
      });

    fetch('https://app.komodomonitr.com/api/v1/players/3/image',{
      method: 'get',
      headers: {'X-Auth-Token': this.props.loginToken}
    })
        .then((imageResponse) => {
        if (imageResponse.ok) {
          return imageResponse.blob();
        } else {
          throw new Error;
        }
      })

      .then((findImageResponse) => {
        this.setState({ endPointPlayerImage: findImageResponse,
                        playerImage: true})
        console.log(this.state.endPointPlayerImage)
        this.endLoadingHandler()
        })
      .catch((error) => {
        this.props.loadingFailed()
      })


    //fetch summary endpoint
    fetch('https://app.komodomonitr.com/api/v1/data/summary?userId=1',{
      method: 'get',
      headers: {'X-Auth-Token': this.props.loginToken}
    })
      .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error;
      }
    })

      .then((summaryResponse)=> {
        this.setState({ endPointSummary: summaryResponse,
                        summary: true})
        this.endLoadingHandler()
      })
      .catch((error) => {
        this.props.loadingFailed()
      });

    //fetch wellness endpoint
    fetch('https://app.komodomonitr.com/api/v1/data/wellness?userId=1',{
      method: 'get',
      headers: {'X-Auth-Token': this.props.loginToken}
    })
      .then((wellnessResponse) => {
      if (wellnessResponse.ok) {
        return wellnessResponse.json();
      } else {
        throw new Error;
      }
    })

      .then((wellnessResponse)=> {
        this.setState({ endPointWellness: wellnessResponse,
                        wellness: true})
        this.endLoadingHandler()
      })
      .catch((error) => {
        this.props.loadingFailed()
      });

    //fetch workload endpoint
    fetch('https://app.komodomonitr.com/api/v1/data/train_load?userId=1',{
      method: 'get',
      headers: {'X-Auth-Token': this.props.loginToken}
    })
      .then((workloadResponse) => {
      if (workloadResponse.ok) {
        return workloadResponse.json();
      } else {
        throw new Error;
      }
    })

      .then((workloadResponse)=> {
        this.setState({ endPointWorkload: workloadResponse,
                        workload: true})
        this.endLoadingHandler()
      })
      .catch((error) => {
        this.props.loadingFailed()
      });

    //fetch rpe laod endpoint
    fetch('https://app.komodomonitr.com/api/v1/data/rpe_load?userId=1',{
      method: 'get',
      headers: {'X-Auth-Token': this.props.loginToken}
    })
      .then((rpeResponse) => {
      if (rpeResponse.ok) {
        return rpeResponse.json();
      } else {
        throw new Error;
      }
    })

      .then((rpeResponse)=> {
        this.setState({ endPointRpe: rpeResponse,
                        rpe: true})
        //send the end point states to app.js
        this.endLoadingHandler()
      })
      .catch((error) => {
        this.props.loadingFailed()
      });

}

render(){
  console.log(this.props.loginToken)

  return(
  <Login isLoading={this.state.isLoading}/>
  )
}
}

export default Loading;
