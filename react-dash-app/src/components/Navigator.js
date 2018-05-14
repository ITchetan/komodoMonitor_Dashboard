import React, {Component} from 'react';
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap';
import { HomeIcon, HeartPulseIcon, MedicalBagIcon, RunFastIcon } from 'mdi-react';
import '../App.css';

// Import React components
// import WellnessFlip from './WellnessFlip';
// import WorkloadFlip from './WorkloadFlip';
// import RpeFlip from './RPEFlip';

class Navigator extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render()
  {
    return (
    <div className="Navigator">
    <Card style={{ text: 'center'}}>
      <CardTitle>Summary</CardTitle>
      <HomeIcon size={72} color="#d40000" />
    </Card>
    <Card>
      <CardTitle>Workload</CardTitle>
      <HeartPulseIcon size={72} color="#d40000" />
    </Card>
    <Card>
      <CardTitle>Wellness</CardTitle>
      <MedicalBagIcon size={72} color="#d40000" />
    </Card>
    <Card>
      <CardTitle>RPE</CardTitle>
      <RunFastIcon size={72} color="#d40000" />
    </Card>
    </div>
  );
}
}
  export default Navigator;
