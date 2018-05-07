import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import components
import Header from "./components/Header";
import Layout from "./components/Layout";

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
  render() {
    return (
      <div className="Wrapper">
      <Header />
      <Layout />
      </div>
    );
  }
}

export default App;
