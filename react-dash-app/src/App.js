import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import Login from "./components/Login";
import ModalFormWellness from './components/ModalFormWellness'
import Loading from "./components/Loading";
import PlayerProfile from './components/PlayerProfile'



// Main function to display content
class App extends Component {
  constructor(){
    super();
    //setting initial state of the react app
    this.state = {
      value: "",
      email: "",
      password: "",
      page: "login",
      barData:{},
      chartData:{},
      insightsDescriptionData: {},
      insightsValueData: {},
      playerIdData: {},
      playerfirstData: {},
      playerLastData: {},
      endPointSummary: {},
      endPointPlayers: {},
      endPointWellness: {},
      endPointWorkload: {},
      endPointRpe: {},
      view: 'home',

    };
    this.changeHome = this.changeHome.bind(this);
    this.changeWorkload = this.changeWorkload.bind(this);
    this.changeWellness = this.changeWellness.bind(this);
    this.changeRpe = this.changeRpe.bind(this);
    this.getLogin = this.getLogin.bind(this);
    this.skipLogin = this.skipLogin.bind(this);
    this.loadingData = this.loadingData.bind(this);
    this.changeProfile = this.changeProfile.bind(this);

  }
//functions to change the state of the page
  changeHome(){
    this.setState({ view: 'home' })
  }

  changeWorkload(){
    this.setState({ view: 'workload'})
  }

  changeWellness(){
    this.setState({ view: 'wellness'})
  }

  changeRpe(){
    this.setState({ view: 'rpe'})
  }

  changeProfile(){
    this.setState({ view: 'profile'})
  }


  //receive email and password from login page

  getLogin(emailData, passwordData){
    this.setState({ email: emailData })
    this.setState({ password: passwordData})
    //enter laoding state after user and pass have been received
    this.setState({ page: "loading"})
  };

  skipLogin() {
    let emailData = "player2@gmail.com"
    let passwordData = "abc123"
    this.setState({ email: emailData })
    this.setState({ password: passwordData})
    this.setState({ page: "loading" })
  }

  //recieve fetched data from loading page and set them into current state of app.js
  loadingData(summary, players, wellness, workload, rpe){
    this.setState({ endPointSummary: summary,
      endPointPlayers: players,
      endPointWellness: wellness,
      endPointWorkload: workload,
      endPointRpe: rpe,})
    this.defineData()
    //end loading and show main page
    this.setState({page: "main"})
  }

//take data from the states and configure the data to go into the page as graphs etc...
defineData(){

  //extract player data
  let dataPlayer = this.state.endPointPlayers
  let playerId = [];
  let playerFirst = [];
  let playerLast = [];

  for (let i = 0; i < dataPlayer.length; i++) {
    let dict = dataPlayer[i];
    for (let key in dict) {
      if (key === 'user_id') {
        playerId.push(dict[key]);
      }
      else if (key === 'fname') {
        playerFirst.push(dict[key]);
      }
      else if (key === 'lname'){
        playerLast.push(dict[key]);
      }}}

  //extract wellness summary data
  let dataWellness = this.state.endPointSummary.wellness
  let wellnessLabels = [];
  let wellnessValues = [];
  for (let items in dataWellness) {
    wellnessLabels.push(items);
    wellnessValues.push(dataWellness[items]);
  }
  wellnessValues.pop();
  wellnessLabels.pop();

  //extract insights summary data
  let dataInsights = this.state.endPointSummary.insights
  let insightsType = [];
  let insightsDescription = [];
  let insightsValue = [];

  for (let i = 0; i < dataInsights.length; i++) {
    var dict = dataInsights[i];
    for (let key in dict) {
      if (key === 'description') {
        insightsDescription.push(dict[key]);
      }
      else if (key === 'value'){
        insightsValue.push(dict[key]);
      }}}

  // var workload_lbl = [];
  // var workload_score = [];
  // var workload_target_min = [];
  // var workload_target_max = [];
  //
  // for (var i = 0; i < dataworkload.length; i++) {
  //   var dict = dataworkload[i];
  //   for (var key in dict) {
  //     if (key === 'week') {
  //       workload_lbl.push(dict[key]);
  //     }
  //     else if (key==='score') {
  //       workload_score.push(dict[key]);
  //     }
  //
  //     else if (key==='target_min') {
  //       workload_target_min.push(dict[key]);
  //     }
  //
  //     else if (key==='target_max') {
  //       workload_target_max.push(dict[key]);
  //     }
  //   }
  // }
  // console.log(workload_lbl)
  // console.log(workload_score)
  // console.log(workload_target_min)
  // console.log(workload_target_max)
  //

  let bar_colour = [];
  for (let i = 0; i < wellnessValues.length; i++) {

    if (wellnessValues[i]===1 || wellnessValues[i]===2 || wellnessValues[i]===3) {
      bar_colour.push('#2dc937')
    }
    else if (wellnessValues[i] === 4) {
      bar_colour.push('#e7b416')
    }
    else if (wellnessValues[i]===5) {
      bar_colour.push('#cc3232')
    }

  }

  this.setState({

    playerIdData: playerId,
    playerFirstData: playerFirst,
    playerLastData: playerLast,


    insightsDescriptionData: insightsDescription,
    insightsValueData: insightsValue,

    barData:{
      labels:wellnessLabels,
      datasets:[{data:wellnessValues,
      backgroundColor: bar_colour,
    }]
  },

    // workloadData:{
    //   labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8' ],
    //   datasets:[{
    //     label: "Min Target",
    //     //data: workload_target_min,
    //     data:[1000, 2500,1800, 2000, 2500, 1000, 1500, 2200],
    //     lineTension: 0.3,
    //     fill: 0,
    //     backgroundColor:'#ABEBC6'},
    //     {
    //       label: "Score",
    //       //data: workload_score,
    //       data: [5000, 3500, 4000, 6000,4000, 5000, 4000, 6000 ],
    //       lineTension: 0.3,
    //       borderColor: 'red',
    //       fill: false,},
    //       {
    //         label: "Max Target",
    //         //data: workload_target_max,
    //         data: [4000, 5000, 6500, 8000,6000, 7000, 9000,7000 ],
    //         lineTension: 0.3,
    //         fill: 0,
    //         backgroundColor:'#ABEBC6'}
    //
    //       ],
    //
    //
    //
    //     },
    //
    //       // Data for rpe Chart
    //       rpeData:{
    //         labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8' ],
    //         datasets:[{
    //           label: "Min Target",
    //           data: [1000, 2500,1800, 2000, 2500, 1000, 1500, 2200],
    //           lineTension: 0.3,
    //           fill: 0,
    //           backgroundColor:'#ABEBC6'},
    //           {
    //             label: "Score",
    //             data: [5000, 3500, 4000, 6000,4000, 5000, 4000, 6000 ],
    //             lineTension: 0.3,
    //             borderColor: 'red',
    //             fill: false,},
    //             {
    //               label: "Max Target",
    //               data: [4000, 5000, 6500, 8000,6000, 7000, 9000,7000 ],
    //               lineTension: 0.3,
    //               fill: 0,
    //               backgroundColor:'#ABEBC6'}
    //
    //             ]}
    //           });
    //         }

  })
}

        render() {
          if (this.state.page === "login") {
            return(
              <div className="Login">
              <Login handlerEmail={this.getLogin} skipLogin={this.skipLogin}  />
              </div>
            )
          }
          else if (this.state.page === "loading") {
            return(
              <div className="Loading">
              <Loading loadingData={this.loadingData} loginEmail={this.state.email} loginPass={this.state.password}/>
              </div>
            )
          }
          else if (this.state.page === "main") {
          return (
            <div>
            <Header changeProfile={this.changeProfile}
            />
            <Layout
            barData={this.state.barData}
            workloadData={this.state.workloadData}
            rpeData={this.state.rpeData}
            view={this.state.view}
            changeHome={this.changeHome}
            changeWorkload={this.changeWorkload}
            changeWellness={this.changeWellness}
            changeRpe={this.changeRpe}
            insightsDescriptionData={this.state.insightsDescriptionData}
            insightsValueData={this.state.insightsValueData}
            playerFirstData={this.state.playerFirstData}
            playerLastData={this.state.playerLastData}
            />
            <ModalFormWellness profileName = " Chris"/>

            </div>
          );
        }
      }
      }

      export default App;
