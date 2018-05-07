import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }


    // Get data from api here for charts
  getChartData(){
    this.setState({
      chartData:{
        labels: ['Nutrition', 'Energy', 'Stress', 'Sleep quality', 'Sleep amount', 'Muscle pain'],
        datasets:[
          {
            label:'Wellness',
            data:[4, 3, 3, 2, 5, 1],

            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      },

    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <Chart chartData={this.state.chartData}/>
      </div>
    );
  }
}

export default App;
