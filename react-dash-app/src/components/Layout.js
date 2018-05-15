import React, {Component} from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import Insight from './Insight'
import Navigator from './Navigator'
import '../App.css';

// Import React components
// import WellnessFlip from './WellnessFlip';
// import WorkloadFlip from './WorkloadFlip';
// import RpeFlip from './RPEFlip';

class Layout extends Component{
  constructor(props){
    super(props);
    this.state = {
      // chart data will be generated in app and passed in chart property, following is telling chart that data will come from property
      barData:props.barData,
      workloadData:props.workloadData,
      rpeData:props.rpeData
    }
  }

  //chart is drown here
  render()
  {
    console.log(this.props.workloadData);
    return (
  <div className="Layout">
  <Container>
    <Row>
      <Col sm={2}>
        <Navigator />
      </Col>
      <Col sm={6}>
      <Card>
      <CardHeader>Placeholder text</CardHeader>
      <CardBody>This is a placeholder</CardBody>
      </Card>
      </Col>
      <Col sm={4}>
      <Container>
        <Row>
          <Col>
          <Insight insight="You need 15% more sleep" />
          </Col>
        </Row>
        <Row>
          <Col>
          <Insight insight="Decrease running distance by 10%" />
          </Col>
        </Row>
        <Row>
          <Col>
          <Insight insight="Improve your nutrition" />
          </Col>
        </Row>
      </Container>
      </Col>
    </Row>
    </Container>
    </div>
  );
}
}
  export default Layout;
