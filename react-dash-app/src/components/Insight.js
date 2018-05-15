import React, {Component} from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import '../App.css';

const Insight = (props) => (
  <div className="Insight">
  <Card color="#d40000" font-color="#fff">
    <CardHeader>{props.insight}</CardHeader>
  </Card>
  </div>
);

export default Insight;
