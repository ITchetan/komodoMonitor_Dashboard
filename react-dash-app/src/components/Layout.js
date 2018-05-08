import React from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import BarChart from './wellnessChart';

const Layout = () => (
  <div className="Layout">
  <Grid>
    <Row>
      <Col sm={6}>
        <Panel><Panel.Body>Placeholder text</Panel.Body></Panel>
      </Col>
      <Col sm={6}>
        <Panel><Panel.Body>Placeholder text</Panel.Body></Panel>
      </Col>
    </Row>
    <Row>
      <Col sm={6}>
        <Panel><Panel.Body>Placeholder text</Panel.Body></Panel>
      </Col>
      <Col sm={6}>
        <Panel><Panel.Body>Placeholder text</Panel.Body></Panel>
      </Col>
    </Row>
    <Row>
      <Col sm={6}>
        <Panel><Panel.Body>Placeholder text</Panel.Body></Panel>
      </Col>
      <Col sm={6}>
        <Panel><Panel.Body>Placeholder text</Panel.Body></Panel>
      </Col>
    </Row>
    </Grid>
    </div>
  );

  export default Layout;
