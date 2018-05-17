import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import Login from "./components/Login";
import ModalFormWellness from './components/ModalFormWellness'




// Main function to display content
class App extends Component {
  constructor(){
    super();
    //setting initial state of the react app
    this.state = {
      value: "",
      email: "player2@gmail.com",
      password: "",
      login: "true",
      barData:{},
      chartData:{},
      insightsDescriptionData: {},
      insightsValueData: {},
      tokenData: {},
      playerIdData: {},
      playerfirstData: {},
      playerLastData: {},

      view: 'home',
    };
    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHome = this.changeHome.bind(this);
    this.changeWorkload = this.changeWorkload.bind(this);
    this.changeWellness = this.changeWellness.bind(this);
    this.changeRpe = this.changeRpe.bind(this);

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


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({ email: this.state.value })
  }
//function to fetch data from api and handle the data
  getData(){
    this.setState({ login: "false"})
    let datajson = {}
    let dataworkload = {}
    let datainsights = {}

    fetch('http://app.komodomonitr.com/api/v1/users/login', {
      body: JSON.stringify({
        "email": this.state.email,
        "password": "abc123"
      }), // must match 'Content-Type' header
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
    })
    .then(response => response.json())

    .then(data => this.setState({tokenData: data.token}))


    .then(token => {fetch('http://app.komodomonitr.com/api/v1/players',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
    })
      .then(userResponse => userResponse.json())

      .then((findUserResponse) =>{
        console.log(findUserResponse)
        let dataPlayer = findUserResponse

        var playerId = [];
        var playerFirst = [];
        var playerLast = [];

        for (var i = 0; i < dataPlayer.length; i++) {
          var dict = dataPlayer[i];
          for (var key in dict) {
            if (key === 'user_id') {
              playerId.push(dict[key]);
            }
            else if (key === 'fname') {
              playerFirst.push(dict[key]);
            }
            else if (key === 'lname'){
              playerLast.push(dict[key]);
            }}}

          this.setState({

            playerIdData: playerId,
            playerFirstData: playerFirst,
            playerLastData: playerLast,

          })
      })})

    .then(token => {fetch('http://app.komodomonitr.com/api/v1/data/summary?userId=4',{
      method: 'get',
      headers: {'X-Auth-Token': this.state.tokenData}
    })
    .then(response => response.json())

    .then((findresponse)=>
    {
      console.log(findresponse.wellness)
      datajson = findresponse.wellness
      dataworkload = findresponse.training_load
      datainsights = findresponse.insights
      console.log(datajson)
      console.log(dataworkload)

      var lbs = [];
      var values = [];
      for (var x in datajson) {
        lbs.push(x);
        values.push(datajson[x]);
      }
      values.pop();
      lbs.pop();

      var insightsType = [];
      var insightsDescription = [];
      var insightsValue = [];

      for (var i = 0; i < datainsights.length; i++) {
        var dict = datainsights[i];
        for (var key in dict) {
          if (key === 'description') {
            insightsDescription.push(dict[key]);
          }
          else if (key === 'value'){
            insightsValue.push(dict[key]);
          }}}

      var workload_lbl = [];
      var workload_score = [];
      var workload_target_min = [];
      var workload_target_max = [];

      for (var i = 0; i < dataworkload.length; i++) {
        var dict = dataworkload[i];
        for (var key in dict) {
          if (key === 'week') {
            workload_lbl.push(dict[key]);
          }
          else if (key==='score') {
            workload_score.push(dict[key]);
          }

          else if (key==='target_min') {
            workload_target_min.push(dict[key]);
          }

          else if (key==='target_max') {
            workload_target_max.push(dict[key]);
          }
        }
      }
      console.log(workload_lbl)
      console.log(workload_score)
      console.log(workload_target_min)
      console.log(workload_target_max)

      this.setState({


        insightsDescriptionData: insightsDescription,
        insightsValueData: insightsValue,

        barData:{
          labels:lbs,
          datasets:[{data:values}]

        },

        workloadData:{
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8' ],
          datasets:[{
            label: "Min Target",
            //data: workload_target_min,
            data:[1000, 2500,1800, 2000, 2500, 1000, 1500, 2200],
            lineTension: 0.3,
            fill: 0,
            backgroundColor:'#ABEBC6'},
            {
              label: "Score",
              //data: workload_score,
              data: [5000, 3500, 4000, 6000,4000, 5000, 4000, 6000 ],
              lineTension: 0.3,
              borderColor: 'red',
              fill: false,},
              {
                label: "Max Target",
                //data: workload_target_max,
                data: [4000, 5000, 6500, 8000,6000, 7000, 9000,7000 ],
                lineTension: 0.3,
                fill: 0,
                backgroundColor:'#ABEBC6'}

              ]},

              // Data for rpe Chart
              rpeData:{
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8' ],
                datasets:[{
                  label: "Min Target",
                  data: [1000, 2500,1800, 2000, 2500, 1000, 1500, 2200],
                  lineTension: 0.3,
                  fill: 0,
                  backgroundColor:'#ABEBC6'},
                  {
                    label: "Score",
                    data: [5000, 3500, 4000, 6000,4000, 5000, 4000, 6000 ],
                    lineTension: 0.3,
                    borderColor: 'red',
                    fill: false,},
                    {
                      label: "Max Target",
                      data: [4000, 5000, 6500, 8000,6000, 7000, 9000,7000 ],
                      lineTension: 0.3,
                      fill: 0,
                      backgroundColor:'#ABEBC6'}

                    ]}
                  });
                }
              )
            }
          )

        }

        render() {
          console.log(this.state.playerIdData);
          console.log(this.state.email);
          console.log(this.state.value);
          if (this.state.login === "true") {
            return(
              <div className="Login">
              <Login getData={this.getData} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>
              </div>
            )
          }

          return (
            <div className="Wrapper">
            <div>
            </div>
            <Header />
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
            />
            <ModalFormWellness profileName = " Chris"/>

            </div>
          );
        }
      }

      export default App;
