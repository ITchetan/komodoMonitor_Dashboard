import React from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

const Header = () => (
  <div className="Header">
  <Grid>
  <Row>
  <Col>
  <Panel>
    <Panel.Heading>
      <h1>Komodo Monitr</h1>
      <h3>John Doe</h3>
    </Panel.Heading>
  </Panel>
  </Col>
  </Row>
  </Grid>
  </div>
);

export default Header;
