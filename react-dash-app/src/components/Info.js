import React, {Component} from "react";
import { Row, Col } from 'reactstrap';
import '../App.css';


class Info extends Component{

  render(){

    return (
      <div >
        <h4>Information</h4>
        <hr />
        <Row >
        <Col sm={5} >
        <div className="info green"></div>
        </Col>
        <Col sm={7} className="d-flex justify-content-between">
        <h5>Optimal.</h5>
        </Col>
        </Row>
        <hr />
        <Row>
        <Col sm={5} >
        <div className="info orange"></div>
        </Col>
        <Col sm={7} className="d-flex justify-content-between">
        <h5>Be cautious. </h5>
        </Col>
        </Row>
        <hr />

        <Row >
        <Col sm={5} >
        <div className="info red"></div>
        </Col>
        <Col sm={7} className="d-flex justify-content-between">
        <h5>Warning! Increased risk of injury.</h5>
        </Col>
        </Row>
        <hr />
        <Row >
        <Col sm={5} >
        <div className="info blue"></div>
        </Col>
        <Col sm={7} className="d-flex justify-content-between">
        <h5>Below optimal.</h5>
        </Col>
        </Row>
        <hr />
        <Row >
        <Col sm={5} className="d-flex justify-content-between">
        <h5><strong>Chart filter</strong></h5>
        </Col>
        <Col sm={7} className="d-flex justify-content-between">
        <h5>Will show selected range if available.</h5>
        </Col>
        </Row>
        <hr />
      </div>

    )
  }
}

export default Info;
