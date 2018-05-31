import React from "react";
import Popup from "reactjs-popup";
import { InfoOutlineIcon  } from 'mdi-react';
import { Row, Col } from 'reactstrap';
import '../App.css';


export default () => (
  <Popup
    trigger={ <InfoOutlineIcon size={36}/> }
    modal

  >
    <div >
      <Row >
      <Col sm={5} >
      <div className="info green"></div>
      </Col>
      <Col sm={7} className="d-flex justify-content-between">
      <h5>Good</h5>
      </Col>
      </Row>
      <hr />
      <Row>
      <Col sm={5} >
      <div className="info orange"></div>
      </Col>
      <Col sm={7} className="d-flex justify-content-between">
      <h5>Not working hard enough</h5>
      </Col>
      </Row>
      <hr />

      <Row >
      <Col sm={5} >
      <div className="info red"></div>
      </Col>
      <Col sm={7} className="d-flex justify-content-between">
      <h5>Injury risk</h5>
      </Col>
      </Row>
      <hr />
      <Row >
      <Col sm={5} >
      <div className="info blue"></div>
      </Col>
      <Col sm={7} className="d-flex justify-content-between">
      <h5>Optimal Zone</h5>
      </Col>
      </Row>
      <hr />
      <Row >
      <Col sm={5} className="d-flex justify-content-between">
      <h5><strong>Chart filter</strong></h5>
      </Col>
      <Col sm={7} className="d-flex justify-content-between">
      <h5>Will show selected range if available</h5>
      </Col>
      </Row>
      <hr />
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="Modal">Close</button>
      </div>

    </div>

  </Popup>
);
