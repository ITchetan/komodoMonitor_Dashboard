import React, { Component } from 'react';
import './App.css';
import BarChart from './components/wellnessChart';
import WorkloadChart from  './components/workloadChart' ;
import RpeChart from  './components/rpeChart' ;
import Header from "./components/Header";
import Layout from "./components/Layout";



// Main function to display content
class App extends Component {
  constructor(){
    super();
    this.state = {

      barData:{},
      chartData:{},
      output: [],
    };
  }



  componentWillMount(){
    this.getChartData();
  }


    // Get data from api here
  getChartData(){
    this.setState({
      // data for wellness chart
      barData:{
        labels: ['Nutrition', 'Energy', 'Stress', 'Sleep quality', 'Sleep amount', 'Muscle pain'],
        datasets:[
          {
            data:[4, 3, 3, 2, 5, 1],

            backgroundColor:[
              'rgba(255, 99, 132, 10)',
              'rgba(54, 162, 235, 10)',
              'rgba(75, 192, 192, 10)',
              'rgba(153, 102, 255, 10)',
              'rgba(255, 206, 86, 10)',
              'rgba(255, 159, 64, 10)'
            ]
          }
        ]
      },
      // Data for workload Chart
      workloadData:{
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8' ],
        datasets:[{
            label: "Min Target",
            data: [2000, 2500,4800, 2100, 4500, 2000, 1500, 2200],
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

  componentDidMount(){

    fetch('http://app.komodomonitr.com/api/v1/users/login', {
      body: JSON.stringify({
        "email": "player2@gmail.com",
        "password": "abc123"
      }), // must match 'Content-Type' header
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
    })

    .then(response => response.json())

    .then(data => {console.log(data); let token = data.token; return token;})

    .then(token => {fetch('http://app.komodomonitr.com/api/v1/data/summary?userId=4',{
      method: 'get',
      headers: {'X-Auth-Token': token}
    })
    .then(response => response.json())
    .then(result =>
      {this.setState({ output: result }, function() {
        console.log(this.state);
      });
    })
  })


  }


  render() {

    return (
      <div className="Wrapper">
      <Header />
      <Layout />
      <BarChart barData={this.state.barData}/>
      <WorkloadChart   workloadData={this.state.workloadData} />
      <RpeChart   rpeData={this.state.rpeData} />
      </div>
    );
  }
}

export default App;
