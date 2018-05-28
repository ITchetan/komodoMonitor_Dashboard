import React from 'react';
import { Card, CardBody } from 'reactstrap';
import '../App.css';

const Insight = (props) => (
  <div>
    <Card className="Insights text-left">
      <CardBody>{props.insight}</CardBody>
    </Card>
  </div>
);

export default Insight;
