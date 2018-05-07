import React, { Component } from 'react';
import './App.css';
import BarChart from './components/wellnessChart';
import WorkloadChart from  './components/workloadChart' ;

// Import components
import Header from "./components/Header";
import Layout from "./components/Layout";

// Bring data here for workload
var minTarget = {
    label: "Min Target",
    data: [2000, 2500,1800, 2100, 2200, 2000, 1500, 2200],
    lineTension: 0.3,
    fill: 1,
    backgroundColor:'#ABEBC6'}
var score = {
    label: "Score",
    data: [5000, 3500, 4000, 6000,4000, 5000, 4000, 6000 ],
    lineTension: 0.3,
    borderColor: 'red',
    fill: false,}
var maxTarget = {
    label: "Max Target",
    data: [7000, 5000, 6500, 8000,6000, 7000, 9000, 10000 ],
    lineTension: 0.3,
    fill: 1,
    backgroundColor:'#ABEBC6'}



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// Main function to display content
class App extends Component {
  constructor(){
    super();
    this.state = {
      barData:{},
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }


    // Get data from api here
  getChartData(){
    this.setState({
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

      chartData:{
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8' ],
        datasets:[minTarget, score, maxTarget

        ]
      }
    });
  }

  render() {
    return (
      <div className="Wrapper">
      <Header />
      <Layout />
      <BarChart barData={this.state.barData}/>
      <WorkloadChart   chartData={this.state.chartData} />
      </div>
    );
  }
}

export default App;
