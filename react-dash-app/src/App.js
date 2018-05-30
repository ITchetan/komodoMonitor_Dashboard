import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import MobileLayout from "./components/MobileLayout";
import MobileHeader from "./components/MobileHeader"
import Login from "./components/Login";

import ModalFormWellness from './components/ModalFormWellness'


import Loading from "./components/Loading";
import ModalFormRPE from './components/ModalFormRPE'

// Main function to display content
class App extends Component {
  constructor(){
    super();
    //setting initial state of the react app
    this.state = {
      loginToken: {},
      email: "",
      password: "",
      page: "login",
      barData:{},
      wellnessTrendsData:{},
      chartData:{},
      rpeData: {},
      playerSessionId:{},
      playerSessionDate:{},
      insightsDescriptionData: {},
      insightsValueData: {},
      playerIdData: {},
      playerFirstData: {},
      playerLastData: {},
      wellnessForm: {},
      endPointSummary: {},
      endPointPlayers: {},
      endPointPlayerImage: {},
      ImageUrlData: {},
      endPointWellness: {},
      endPointWorkload: {},
      endPointRpe: {},
      endPointSessions:{},
      view: 'home',
      width: window.innerWidth,

    };
    this.changeHome = this.changeHome.bind(this);
    this.changeWorkload = this.changeWorkload.bind(this);
    this.changeWellness = this.changeWellness.bind(this);
    this.changeRpe = this.changeRpe.bind(this);
    this.getLogin = this.getLogin.bind(this);
    this.loadingData = this.loadingData.bind(this);
    this.changeProfile = this.changeProfile.bind(this);
    this.logout = this.logout.bind(this);

  }

// Listeners for resizing widow for mobile View
componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange)
}

componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange)
}

handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
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

  logout(){
    this.setState({
    loginToken: {},
    email: "",
    password: "",
    page: "login",
    barData:{},
    wellnessTrendsData:{},
    chartData:{},
    rpeData: {},
    playerSessionId:{},
    playerSessionDate:{},
    insightsDescriptionData: {},
    insightsValueData: {},
    playerIdData: {},
    playerFirstData: {},
    playerLastData: {},
    wellnessForm: {},
    endPointSummary: {},
    endPointPlayers: {},
    endPointWellness: {},
    endPointWorkload: {},
    endPointRpe: {},
    endPointSessions:{},
    view: 'home', })
  }


  //receive email and password from login page
  getLogin(tokenData, emailData, passwordData){
    this.setState({ loginToken: tokenData,
                    email: emailData,
                    password: passwordData})
    //enter laoding state after user and pass have been received
    this.setState({ page: "loading", })
  };



  //recieve fetched data from loading page and set them into current state of app.js

  loadingData(summary, players,playerImage, wellness, workload, rpe,sessions,){
    this.setState({ endPointSummary: summary,
      endPointPlayers: players,
      endPointPlayerImage: playerImage,
      endPointWellness: wellness,
      endPointWorkload: workload,
      endPointRpe: rpe,
      endPointSessions:sessions
      })
    this.defineData()
    //end loading and show main page
    this.setState({page: "main"})
  }

//take data from the states and configure the data to go into the page as graphs etc...
defineData(){
  //extract sessions (session ID and date) data

  // let dataSessions = [{session_id: 1, datetime: "2018-05-17 16:00:00", title: "Training session", type: "train"},
  //                     {session_id: 2, datetime: "2019-05-17 16:00:00", title: "Training session", type: "train"},
  //                     {session_id: 3, datetime: "2020-05-17 16:00:00", title: "Training session", type: "train"}]

  let dataSessions = [{session_id: 1, datetime: "2018-05-17 16:00:00", title: "Training session", type: "train"}]



  // let dataSessions = this.state.endPointSessions
  console.log(dataSessions);
  let sessionId = [];
  let sessionDate = [];
  // for (var i = 1; i < 3; i++) {
  //   sessionId.push(i);
  //   sessionDate.push(i);
  // }

  for (let i = 0; i < dataSessions.length; i++) {
    let dict = dataSessions[i];
    for (let key in dict) {
      if (key === 'session_id') {
        sessionId.push(dict[key]);
      }
      else if (key === 'datetime') {
        sessionDate.push(dict[key]);
      }
}}

console.log(sessionId);
console.log(sessionDate);

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
  let wellnessInput = [];
  let wellnessTotal = 0;


  for (let item in dataWellness) {
    wellnessLabels.push(item);
    wellnessValues.push(dataWellness[item]);

    if (item === 'input_due') {
      wellnessInput = dataWellness[item]
    }
  }
  wellnessValues.pop();
  wellnessLabels.pop();

  for (let score in wellnessValues) {
    wellnessTotal = wellnessTotal + wellnessValues[score]
  }

    // Extract workload summary dataset
  let workloadSummaryValue = this.state.endPointSummary.training_load.score
  let workloadSummaryMin = this.state.endPointSummary.training_load.target_min
  let workloadSummaryMax = this.state.endPointSummary.training_load.target_max

  // Extract RPE summary dataset
  let rpeSummaryValue = this.state.endPointSummary.rpe_load.score
  let rpeSummaryMin = this.state.endPointSummary.rpe_load.target_min
  let rpeSummaryMax = this.state.endPointSummary.rpe_load.target_max

  // Komodo number generation

  // Wellness percentage

  let wellnessPercent
  let wellnessThreshold = 15
  let wellnessCalc = wellnessTotal / wellnessThreshold
  if (wellnessCalc <= 1 ) {
    wellnessPercent = 1
  } else {
    wellnessPercent = 2 - wellnessCalc
    if (wellnessPercent < 0) {
      wellnessPercent = 0
    }
  }


  // Workload percentage

  let workloadPercent
  let workloadCalc
  if (workloadSummaryValue < workloadSummaryMin) {
    workloadCalc = workloadSummaryValue / workloadSummaryMin
    workloadPercent = workloadCalc
  } else if (workloadSummaryValue > workloadSummaryMax) {
    workloadCalc = workloadSummaryValue / workloadSummaryMax
    workloadPercent = 2 - workloadCalc
    if (workloadPercent < 0) {
      workloadPercent = 0
    }
  } else {
    workloadPercent = 1
  }

  // RPE percentage

  let rpePercent
  let rpeCalc
  if (rpeSummaryValue < rpeSummaryMin) {
    rpeCalc = rpeSummaryValue / rpeSummaryMin
    rpePercent = rpeCalc
  } else if (rpeSummaryValue > rpeSummaryMax) {
    rpeCalc = rpeSummaryValue / rpeSummaryMax
    rpePercent = 2 - rpeCalc
    if (rpePercent < 0) {
      rpePercent = 0
    }
  } else {
    rpePercent = 1
  }

  // Calculate Komodo Number

  let komodoPercent = (wellnessPercent + workloadPercent + rpePercent) / 3


  //extract insights summary data
  let dataInsights = this.state.endPointSummary.insights
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

  //map weekly workload data to variables
  let dataWorkload = this.state.endPointWorkload.data;
  let workloadLabel = [];
  let workloadScore = [];
  let workloadMin = [];
  let workloadMax = [];

  for (let i = 0; i < dataWorkload.length; i++) {
    let dict = dataWorkload[i];
    for (let key in dict) {
      if (key === 'week_start') {
        workloadLabel.push(dict[key]);
      }
      else if (key ==='score') {
        workloadScore.push(dict[key]);
      }

      else if (key ==='target_min') {
        workloadMin.push(dict[key]);
      }

      else if (key ==='target_max') {
        workloadMax.push(dict[key]);
      }
    }
  }

  //map weekly wellness data ot variables
  let dataWellnessTrend = this.state.endPointWellness.data;
  let wellnessWeekLabel = [];
  let wellnessNutrition = [];
  let wellnessEnergy = [];
  let wellnessStress = [];
  let wellnessSleepQuality = [];
  let wellnessSleepAmount = [];
  let wellnessPain = [];
  let wellnessWeeklyTotal = [];

  for (let i = 0; i < dataWellnessTrend.length; i++) {
    let dict = dataWellnessTrend[i];
    for (let key in dict) {
      if (key === 'week_start') {
        wellnessWeekLabel.push(dict[key]);
      }
      else if (key ==='nutrition') {
        wellnessNutrition.push(dict[key]);
      }

      else if (key ==='energy') {
        wellnessEnergy.push(dict[key]);
      }

      else if (key ==='stress') {
        wellnessStress.push(dict[key]);
      }
      else if (key ==='sleep_quality') {
        wellnessSleepQuality.push(dict[key]);
      }
      else if (key ==='sleep_amount') {
        wellnessSleepAmount.push(dict[key]);
      }
      else if (key ==='pain') {
        wellnessPain.push(dict[key]);
      }
    }
  }

  for (let i = 0; i < wellnessWeekLabel.length; i++) {
    wellnessWeeklyTotal.push(wellnessNutrition[i] +
                             wellnessEnergy[i] +
                             wellnessStress[i] +
                             wellnessSleepQuality[i] +
                             wellnessSleepAmount[i] +
                             wellnessPain[i])
  }
console.log(wellnessWeeklyTotal)

  //set color for workloadbar graph depend on which zone the score is
    let workloadbarColor =[];
    for (let i = 0; i<workloadScore.length; i++){

      if (workloadScore[i]<workloadMin[i]) {
        workloadbarColor.push('#ffa500')
      }
      else if (workloadScore[i]>workloadMax[i] ) {
        workloadbarColor.push('#cc3232')
      }
      else {workloadbarColor.push('#2dc937')}

    }

  //map weekly rpe data to variables
  let dataRpe = this.state.endPointRpe.data;
  let rpeLabel = [];
  let rpeScore = [];
  let rpeMin = [];
  let rpeMax = [];

  for (let i = 0; i < dataRpe.length; i++) {
    let dict = dataRpe[i];
    rpeMin.push(this.state.endPointRpe.target_min)
    rpeMax.push(this.state.endPointRpe.target_max)
    for (let key in dict) {
      if (key === 'week_start') {
        rpeLabel.push(dict[key]);
      }
      else if (key === 'score') {
        rpeScore.push(dict[key]);
      }
    }
  }
//set color for rpebar graph depend on which zone the score is
  let rpeBarColor =[];
  for (let i = 0; i<rpeScore.length; i++){

    if (rpeScore[i]<rpeMin[i]) {
      rpeBarColor.push('#ffa500')
    }
    else if (rpeScore[i]>rpeMax[i] ) {
      rpeBarColor.push('#cc3232')
    }
    else {rpeBarColor.push('#2dc937')}

  }

  //set colors for the wellness graph
  let bar_colour = [];
  for (let i = 0; i < wellnessValues.length; i++) {

    if (wellnessValues[i]===1 || wellnessValues[i]===2 || wellnessValues[i]===3) {
      bar_colour.push('#2dc937')
    }
    else if (wellnessValues[i] === 4) {
      bar_colour.push('#ffa500')
    }
    else if (wellnessValues[i]===5) {
      bar_colour.push('#cc3232')
    }
  }

  //set url for player image
  let ImageUrl = URL.createObjectURL(this.state.endPointPlayerImage);

  this.setState({


    //set player session data states

    playerSessionId:sessionId,
    playerSessionDate:sessionDate,

    //set state for player image URL
    ImageUrlData: ImageUrl,


    //set player data states
    playerIdData: playerId,
    playerFirstData: playerFirst,
    playerLastData: playerLast,

    //set wellness state
    wellnessForm: wellnessInput,
    wellnessTotalData: wellnessTotal,

    workloadSummaryData:{
      value: workloadSummaryValue,
      min: workloadSummaryMin,
      max: workloadSummaryMax
    },

    rpeSummaryData:{
      value: rpeSummaryValue,
      min: rpeSummaryMin,
      max: rpeSummaryMax
    },


    komodoNumberData:{
      total: komodoPercent,
      workload: workloadPercent,
      wellness: wellnessPercent,
      rpe: rpePercent
    },


    //set insights state

    insightsDescriptionData: insightsDescription,
    insightsValueData: insightsValue,

    //map data for wellness graph
    barData:{
      labels:wellnessLabels,
      datasets:[{data:wellnessValues,
      backgroundColor: bar_colour,
    }]},

    // map data for WellnessTrends here
    wellnessTrendsData:{
        //labels : wellnessWeekLabel,
        labels: ['Week 1','Week 2', 'Week 3','Week 4','Week 5','Week 6','Week 7','Week 8','Week 9', 'Week 10','Week 11','Week 12','Week 13','Week 14',
                  'Week 15','Week 16', 'Week 17','Week 18','Week 19','Week 20','Week 21','Week 22','Week 23', 'Week 24','Week 25','Week 26','Week 27','Week 28',
                'Week 29','Week 30', 'Week 31','Week 32','Week 33','Week 34','Week 35','Week 36','Week 37', 'Week 38','Week 39','Week 40','Week 41','Week 42',
                'Week 43','Week 44', 'Week 45','Week 46','Week 47','Week 48','Week 49','Week 50','Week 51', 'Week 52','Week 53','Week 54','Week 55','Week 56',
              'Week 57','Week 58', 'Week 59','Week 60','Week 61','Week 62','Week 63','Week 64','Week 65', 'Week 66','Week 67','Week 68','Week 69','Week 70',
            'Week 71','Week 72', 'Week 73','Week 74','Week 75','Week 76','Week 77','Week 78','Week 79', 'Week 80','Week 81','Week 82','Week 83','Week 84'],
        datasets:[{
          label: "Score",
          //data: wellnessWeeklyTotal,
          data:[16.5,30.0,28.1,9.5,19,9,26,30,22,12,13,14,15,6,6,15,18,8,15,16,25,30,21,19,27,8,22,23,11,5,25,7,30,20,10,24,
                9,5,14,5,26,27,5,13,7,8,6,13,8,7,5,7,30,16,15,26,21,18,5,10,18,12,15,19,5,22,8,25,13,22,30,14,21,8,23
                ,12,12,18,16,9,24,11,21,13],
          lineTension: 0.3,
          borderColor: '#00BFFF',
          backgroundColor:"rgb(173,216,230,0.5)"}]},

    //map data for workload line graph
    workloadData:{
      labels: workloadLabel,
      datasets:[{
        label: "Min Target",
        data:workloadMin,
        lineTension: 0.3,
        fill: 0,
        type: 'line',
        xAxisID: '2nd axis',
      },

        {
          label: "Score",
          data: workloadScore,
          backgroundColor: workloadbarColor

        },

          {
            label: "Max Target",
            data: workloadMax,
            lineTension: 0.3,
            fill: 0,
            type: 'line',
            backgroundColor:"rgba(94, 213, 121 ,0.5)",
            xAxisID: '2nd axis',
          }
          ],},


      // Data for rpe Chart
      rpeData:{
        //labels: rpeLabel,
        labels: ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12', '13', '14',
                  '1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12', '13', '14'],
        datasets:[{
            label: "Min Target",
            //data: rpeMin,
            data: [3000,5000,4000,5000,3000,2000,5000,3000,1000,3000,2000,5000,1000,3000,
            3000,5000,4000,5000,3000,2000,5000,3000,1000,3000,2000,5000,1000,3000],
            lineTension: 0.3,
            fill: 0,
            type: 'line',
            xAxisID: '2nd axis',
          },
          {
            label: "Score",
            //data: rpeScore,
            data: [3000,4000,5000,3900,4800,5300,5900,3000,4000,5000,3900,4800,5300,5900,
            3000,4000,5000,3900,4800,5300,5900,3000,4000,5000,3900,4800,5300,5900],
            //backgroundColor: rpeBarColor
            backgroundColor: '#85C1E9'
            },
          {
            label: "Max Target",
            //data: rpeMax,
            data: [7000,9000,7000,6000,7000,7000,10000,7000,6000,7000,5000,7000,4000,7000,
            7000,9000,7000,6000,7000,7000,10000,7000,6000,7000,5000,7000,4000,7000],
            lineTension: 0.3,
            fill: 0,
            backgroundColor:"rgba(94, 213, 121 ,0.5)",
            type: 'line',
            xAxisID: '2nd axis',
            }

            ]}
          });
        }


      renderModal() {
            let rpeform = []
            for (let i = 0; i < this.state.playerSessionId.length; i++){
              rpeform.push( <div> <ModalFormRPE loginToken={this.state.loginToken} profileName ={this.state.playerFirstData[2]} playerSessionId ={this.state.playerSessionId[i]} playerSessionDate = {this.state.playerSessionDate[i]}/> </div> )
            }
            return rpeform
          }

        render() {


          const { width } = this.state
          const isMobile = width <= 575

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
              <Loading loadingData={this.loadingData} loginToken={this.state.loginToken} email={this.state.email} pass={this.state.password}/>
              </div>
            )
          }
          else if (this.state.page === "main" && isMobile) {
          return (
            <div>
            <MobileHeader changeProfile={this.changeProfile}
                    logout={this.logout}
            />
            <MobileLayout
            barData={this.state.barData}
            wellnessTrendsData={this.state.wellnessTrendsData}
            workloadData={this.state.workloadData}
            rpeData={this.state.rpeData}
            view={this.state.view}
            changeHome={this.changeHome}
            changeWorkload={this.changeWorkload}
            changeWellness={this.changeWellness}
            changeRpe={this.changeRpe}
            changeProfile={this.changeProfile}
            insightsDescriptionData={this.state.insightsDescriptionData}
            insightsValueData={this.state.insightsValueData}
            playerFirstData={this.state.playerFirstData}
            playerLastData={this.state.playerLastData}
            wellnessTotal={this.state.wellnessTotalData}
            workloadSummary={this.state.workloadSummaryData}
            rpeSummary={this.state.rpeSummaryData}
            komodoNumber={this.state.komodoNumberData}
            playerImage={this.state.ImageUrlData}
            loginToken={this.state.loginToken}
            logout={this.logout}
            />


            {this.state.wellnessForm === true &&
            <ModalFormWellness loginToken={this.state.loginToken} profileName = {this.state.playerFirstData[2]}/>
            }
            </div>
          );
        }

          else if (this.state.page === "main") {
          return (

            <div>
            <Header changeProfile={this.changeProfile}
                    playerImage={this.state.ImageUrlData}
                    view={this.state.view}
            />
            <Layout
            barData={this.state.barData}
            wellnessTrendsData={this.state.wellnessTrendsData}
            workloadData={this.state.workloadData}
            rpeData={this.state.rpeData}
            view={this.state.view}
            changeHome={this.changeHome}
            changeWorkload={this.changeWorkload}
            changeWellness={this.changeWellness}
            changeRpe={this.changeRpe}
            changeProfile={this.changeProfile}
            insightsDescriptionData={this.state.insightsDescriptionData}
            insightsValueData={this.state.insightsValueData}
            playerFirstData={this.state.playerFirstData}
            playerLastData={this.state.playerLastData}
            wellnessTotal={this.state.wellnessTotalData}
            workloadSummary={this.state.workloadSummaryData}
            rpeSummary={this.state.rpeSummaryData}
            komodoNumber={this.state.komodoNumberData}
            playerImage={this.state.ImageUrlData}
            loginToken={this.state.loginToken}
            logout={this.logout}
            />

            {this.renderModal()}

            {this.state.wellnessForm === true &&
            <ModalFormWellness loginToken={this.state.loginToken} profileName = {this.state.playerFirstData[2]}/>
            }


            </div>
          );
        }
      }
      }

      export default App;
