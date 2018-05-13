import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";

// Main function to display content
class App extends Component {
  constructor(){
    super();
    this.state = {
      barData:{},
      chartData:{},
      output: {},
    };
  }



  // componentWillMount(){
  //   this.getChartData();
  // }


    // Get data from api here
  // getChartData(){
  //   this.setState({
  //     // data for wellness chart
  //     barData:{
  //       labels: ['Nutrition', 'Energy', 'Stress', 'Sleep quality', 'Sleep amount', 'Muscle pain'],
  //       datasets:[
  //         {
  //           data:[4, 3, 3, 2, 5, 1],
  //
  //           backgroundColor:[
  //             'rgba(255, 99, 132, 10)',
  //             'rgba(54, 162, 235, 10)',
  //             'rgba(75, 192, 192, 10)',
  //             'rgba(153, 102, 255, 10)',
  //             'rgba(255, 206, 86, 10)',
  //             'rgba(255, 159, 64, 10)'
  //           ]
  //         }
  //       ]
  //     },
  //     // Data for workload Chart
  //     workloadData:{
  //       labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8' ],
  //       datasets:[{
  //           label: "Min Target",
  //           data: [2000, 2500,4800, 2100, 4500, 2000, 1500, 2200],
  //           lineTension: 0.3,
  //           fill: 0,
  //           backgroundColor:'#ABEBC6'},
  //           {
  //           label: "Score",
  //           data: [5000, 3500, 4000, 6000,4000, 5000, 4000, 6000 ],
  //           lineTension: 0.3,
  //           borderColor: 'red',
  //           fill: false,},
  //           {
  //           label: "Max Target",
  //           data: [4000, 5000, 6500, 8000,6000, 7000, 9000,7000 ],
  //           lineTension: 0.3,
  //           fill: 0,
  //           backgroundColor:'#ABEBC6'}
  //
  //       ]},
  //
  //       // Data for rpe Chart
  //       rpeData:{
  //         labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8' ],
  //         datasets:[{
  //             label: "Min Target",
  //             data: [1000, 2500,1800, 2000, 2500, 1000, 1500, 2200],
  //             lineTension: 0.3,
  //             fill: 0,
  //             backgroundColor:'#ABEBC6'},
  //             {
  //             label: "Score",
  //             data: [5000, 3500, 4000, 6000,4000, 5000, 4000, 6000 ],
  //             lineTension: 0.3,
  //             borderColor: 'red',
  //             fill: false,},
  //             {
  //             label: "Max Target",
  //             data: [4000, 5000, 6500, 8000,6000, 7000, 9000,7000 ],
  //             lineTension: 0.3,
  //             fill: 0,
  //             backgroundColor:'#ABEBC6'}
  //
  //         ]}
  //   });
  // }

  // componentDidMount(){
  //
  //   fetch('http://app.komodomonitr.com/api/v1/users/login', {
  //     body: JSON.stringify({
  //       "email": "player2@gmail.com",
  //       "password": "abc123"
  //     }), // must match 'Content-Type' header
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     method: 'POST',
  //   })
  //
  //   .then(response => response.json())
  //
  //   .then(data => {console.log(data); let token = data.token; return token;})
  //
  //   .then(token => {fetch('http://app.komodomonitr.com/api/v1/data/summary?userId=4',{
  //     method: 'get',
  //     headers: {'X-Auth-Token': token}
  //   })
  //   .then(response => response.json())
  //   .then(result =>
  //     {this.setState({ output: result }, function() {
  //       console.log(this.state);
  //     });
  //   })
  // })
  //
  //
  // }




  componentDidMount(){
    let datajson = {}
    let dataworkload = {}

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

    .then(token => {fetch('http://app.komodomonitr.com/api/v1/data/summary?userId=3',{
      method: 'get',
      headers: {'X-Auth-Token': token}
    })
    .then(response => response.json())

    .then((findresponse)=>
        {
          console.log(findresponse.wellness.data)
          datajson = findresponse.wellness.data
          dataworkload = findresponse.workload.data
          console.log(datajson)
          console.log(dataworkload)

             var lbs = [];
             var values = [];
             for (var x in datajson) {
               lbs.push(x);
               values.push(datajson[x]);
             }
             console.log(lbs)
             console.log(values)

             var workload_lbl = [];
             var workload_score = [];
             var workload_target_min = [];
             var workload_target_max = [];

            for (var i = 0; i < dataworkload.length; i++) {
              var dict = dataworkload[i];
              for (var key in dict) {
                if (key == 'week') {
                  workload_lbl.push(dict[key]);
                }
                else if (key=='score') {
                  workload_score.push(dict[key]);
                }

                else if (key=='target_min') {
                  workload_target_min.push(dict[key]);
                }

                else if (key=='target_max') {
                  workload_target_max.push(dict[key]);
                }
              }
            }
            console.log(workload_lbl)
            console.log(workload_score)
            console.log(workload_target_min)
            console.log(workload_target_max)




             this.setState({

               barData:{
                       labels:lbs,
                       datasets:[{data:values,}]

                     },

             workloadData:{
               labels: workload_lbl,
               datasets:[{
                   label: "Min Target",
                   data: workload_target_min,
                   lineTension: 0.3,
                   fill: 0,
                   backgroundColor:'#ABEBC6'},
                   {
                   label: "Score",
                   data: workload_score,
                   lineTension: 0.3,
                   borderColor: 'red',
                   fill: false,},
                   {
                   label: "Max Target",
                   data: workload_target_max,
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
    console.log(this.state.barData)

    return (
      <div className="Wrapper">
      <div>
      </div>
      <Header />
      <Layout barData={this.state.barData} workloadData={this.state.workloadData} rpeData={this.state.rpeData} />

      </div>
    );
  }
}

export default App;
