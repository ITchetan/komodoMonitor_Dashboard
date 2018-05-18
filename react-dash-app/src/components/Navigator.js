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
      <div style={{ textAlign: 'center' }}>
        <h4>Summary</h4>
        <HomeIcon size={72} color="#d40000" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4>Workload</h4>
        <HeartPulseIcon size={72} color="#C0C0C0" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4>Wellness</h4>
        <MedicalBagIcon size={72} color="#C0C0C0" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4>RPE</h4>
        <RunFastIcon size={72} color="#C0C0C0" />
      </div>
    </div>
  );
}
}
  export default Navigator;
