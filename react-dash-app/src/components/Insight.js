import React, {Component} from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import '../App.css';

const Insight = (props) => (
  <div>
  <div className="InsightValue">
  {props.insightValue}
  </div>
  <Card className="Insights">
    <CardBody>{props.insight}</CardBody>
  </Card>
  </div>
);

export default Insight;
