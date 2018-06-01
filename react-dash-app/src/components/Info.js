import React, {Component} from "react";
import { Row, Col } from 'reactstrap';
import '../App.css';


class Info extends Component{

  render(){

    return (
      <div >
        <h3>Information</h3>
        <hr />
        <Row >
          <Col xs={3} >
            <div className="info green"></div>
          </Col>
          <Col xs={9} className="d-flex">
            <p className='text-left'>You are in your optimal training zone.</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={3} >
            <div className="info orange"></div>
          </Col>
          <Col xs={9} className="d-flex">
            <p className='text-left'>Be cautious. You may be increasing your risk of injury and poor performance.</p>
          </Col>
        </Row>
        <hr />
        <Row >
          <Col xs={3} >
            <div className="info red"></div>
          </Col>
          <Col xs={9} className="d-flex">
            <p className="text-left">Warning! You are at increased risk of injury.</p>
          </Col>
        </Row>
        <hr />
        <Row >
          <Col xs={3}>
            <div className="info blue"></div>
          </Col>
          <Col xs={9} className="d-flex">
            <p className="text-left">Below optimal. You can work harder without risking injury, and may improve your performance.</p>
          </Col>
        </Row>
        <hr />
        <Row >
        <Col xs={3} className="d-flex">
        <h5><strong>Chart filter</strong></h5>
        </Col>
        <Col xs={9} className="d-flex">
        <p className="text-left">Will show selected range if available.</p>
        </Col>
        </Row>
        <hr />
      </div>

    )
  }
}

export default Info;
