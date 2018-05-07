import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

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

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Header />
      <Layout />
      </React.Fragment>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="Header">
      <Jumbotron>
        <h1>Komodo Monitr</h1>
        <p>
          Player information for player-to-be-named-later.
        </p>
      </Jumbotron>;
      </div>
    );
  }
}

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
      <Grid>
        <Row>
          <Col sm={6}>
            <p>Placeholder text</p>
          </Col>
          <Col sm={6}>
            <p>Placeholder text</p>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <p>Placeholder text</p>
          </Col>
          <Col sm={6}>
            <p>Placeholder text</p>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <p>Placeholder text</p>
          </Col>
          <Col sm={6}>
            <p>Placeholder text</p>
          </Col>
        </Row>
        </Grid>
        </div>
      );
  }
}

export default App;
