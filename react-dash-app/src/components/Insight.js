import React, {Component} from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import '../App.css';

const Insight = (props) => (
  <div className="Insight">
  <Card>
    <CardHeader>{props.insight}</CardHeader>
  </Card>
  </div>
);

export default Insight;
