import React, {Component} from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader, Button } from 'reactstrap';



class PlayerProfile extends Component{
  constructor(props){
    super(props);
    this.state = {
      playerFirstData:props.playerFirstData,
      playerLastData:props.playerLastData
    }
  }

  render(){
    console.log(this.props.playerFirstData);
    return (
      <div >
      <Container  >

            <Col >
                <img src={require('./fakePlayer.jpg')} height="150" width="150" />
            </Col>
            
            <br />

            <Col >
                <h5><strong> First Name :</strong> {this.props.playerFirstData} </h5>
                <h5><strong> Last Name : </strong> {this.props.playerLastData} </h5>
            </Col>
      </Container>
      </div>
    )
  }
}

//exporting class to use in other files
export default PlayerProfile;
