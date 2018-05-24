import React from 'react';
import { Form,Container,Row,Col,Label,Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalFormWellness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      buttonLabel:'Wellness Form',
      profileName:props.profileName,
      nutrition:'0',
      energy:'0',
      sleepQuality:'0',
      stress:'0',
      sleepAmount:'0',
      muscleSoreness:'0',

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeNutrition = this.handleChangeNutrition.bind(this);
    // this.sendData = this.sendData.bind(this);


  }
// handle change fuctions to assign change to the variables

handleChangeNutrition = (e) => {

  this.setState({
      nutrition: e.target.value
    })

}

handleChangeEnergy = (e) => {
  this.setState({
    energy: e.target.value
  }
  )
}

handleChangeSleepQuality = (e) => {
  this.setState({
    sleepQuality: e.target.value
  }
  )
}

handleChangeStress = (e) => {
  this.setState({
    stress: e.target.value
  }
  )
}

handleChangeSleepAmount = (e) => {
  this.setState({
    sleepAmount: e.target.value
  }
  )
}

handleChangeMuscleSorness = (e) => {
  this.setState({
    muscleSoreness: e.target.value
  }
  )
}

// handle submit for the modal button, which assiign scale values to the slider movement

handleSubmit = (e) =>{
  let nutritionScale;
  let stressScale;
  let sleepAmountScale;
  let sleepQualityScale;
  let energyScale;
  let musclePainScale;
  let nutrition = this.state.nutrition;
  let energy = this.state.energy;
  let stress = this.state.stress;
  let sleepQuality = this.state.sleepQuality;
  let sleepAmount = this.state.sleepAmount;
  let musclePain = this.state.muscleSoreness

  if (nutrition <= 20){
    nutritionScale = 1;
  }
  else if (nutrition >20 && nutrition <=40) {
    nutritionScale = 2;
  }
  else if (nutrition >40 && nutrition <= 60) {
    nutritionScale = 3;

  }
  else if (nutrition>60 && nutrition <=80) {
    nutritionScale = 4;
  }
  else if (nutrition > 80) {
    nutritionScale =5;
  }

  if (energy <= 20){
    energyScale = 1;
  }
  else if (energy >20 && energy <=40) {
    energyScale = 2;
  }
  else if (energy >40 && energy <= 60) {
    energyScale = 3;

  }
  else if (energy>60 && energy<=80) {
    energyScale = 4;
  }
  else if (energy > 80) {
    energyScale =5;
  }

  if (stress <= 20){
    stressScale = 1;
  }
  else if (stress >20 && stress <=40) {
    stressScale = 2;
  }
  else if (stress >40 && stress <= 60) {
    stressScale = 3;

  }
  else if (stress>60 && stress <=80) {
    stressScale = 4;
  }
  else if (stress > 80) {
    stressScale =5;
  }


  if (sleepQuality <= 20){
    sleepQualityScale = 1;
  }
  else if (sleepQuality >20 && sleepQuality <=40) {
    sleepQualityScale = 2;
  }
  else if (sleepQuality >40 && sleepQuality <= 60) {
    sleepQualityScale = 3;

  }
  else if (sleepQuality>60 && sleepQuality <=80) {
    sleepQualityScale = 4;
  }
  else if (sleepQuality > 80) {
    sleepQualityScale =5;
  }


  if (sleepAmount <= 20){
    sleepAmountScale = 1;
  }
  else if (sleepAmount >20 && sleepAmount <=40) {
    sleepAmountScale = 2;
  }
  else if (sleepAmount >40 && sleepAmount <= 60) {
    sleepAmountScale = 3;

  }
  else if (sleepAmount>60 && sleepAmount <=80) {
    sleepAmountScale = 4;
  }
  else if (sleepAmount > 80) {
    sleepAmountScale =5;
  }


  if (musclePain <= 20){
    musclePainScale = 1;
  }
  else if (musclePain >20 && musclePain <=40) {
    musclePainScale = 2;
  }
  else if (musclePain >40 && musclePain <= 60) {
    musclePainScale = 3;

  }
  else if (musclePain>60 && musclePain <=80) {
    musclePainScale = 4;
  }
  else if (musclePain > 80) {
    musclePainScale =5;
  }

// method to post the values to wellness API

  fetch('https://app.komodomonitr.com/api/v1/data/wellness?userId=1', {
    body:JSON.stringify(
    {

    "nutrition": nutritionScale,
    "energy": energyScale,
    "stress": stressScale,
    "sleep_quality": sleepQualityScale,
    "sleep_amount": sleepAmountScale,
    "muscle_pain": musclePainScale


  }) ,
    // must match 'Content-Type' header
    headers: {
      'Accept' : 'application/json',
      'Content-type': 'application/json',
      'X-Auth-Token': this.props.loginToken
    },
    method: 'POST',
  });

  this.setState({
    modal: !this.state.modal,
  });

  e.preventDefault()

}



  render() {
    return (
      <div className = "ModalForm">
      <Container>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
              <Form onSubmit ={this.handleSubmit}>
                  <ModalHeader toggle={this.toggle}>Hi{this.props.profileName}, please complete your wellness survey!!</ModalHeader>
                  <ModalBody>
                    <div>
                          <Row>
                                <Label for ="Nutrition:" sm = {3} > Nutrition:</Label>
                                <Col sm={2} className="SmallText">
                                  Very Satisfied
                                </Col>
                                <Col sm={3}>
                                  <input type="range" value = {this.state.nutrition} onChange = {this.handleChangeNutrition} list="tickmarks"/>
                                  <datalist id="tickmarks">
                                    <option value="0" label="0%"/>
                                    <option value="10"/>
                                    <option value="20"/>
                                    <option value="30"/>
                                    <option value="40"/>
                                    <option value="50" label="50%"/>
                                    <option value="60"/>
                                    <option value="70"/>
                                    <option value="80"/>
                                    <option value="90"/>
                                    <option value="100" label="100%"/>
                                  </datalist>
                                  </Col>
                                  <Col className="SmallText" sm={3}>
                                  Very malnourished
                                  </Col>
                          </Row>
                          <Row>
                                <Label for ="Energy" sm = {3} >Energy:</Label>
                                <Col sm={2} className="SmallText">
                                Full of energy
                                </Col>
                                <Col sm={3}>
                                <input type="range" min= "1" max = "5" step = "any" value = {this.state.energy} onChange = {this.handleChangeEnergy} list="tickmarks"/>
                                  <datalist id="tickmarks">
                                    <option value="0" label="0%"/>
                                    <option value="10"/>
                                    <option value="20"/>
                                    <option value="30"/>
                                    <option value="40"/>
                                    <option value="50" label="50%"/>

                                  </datalist>
                                </Col>
                                <Col sm={3} className="SmallText">
                                Very fatigued
                                </Col>
                          </Row>
                          <Row>
                                <Label for ="Sleep quality" sm = {3} >Sleep quality:</Label>
                                <Col sm={2} className="SmallText">
                                  Very Rested
                                </Col>
                                <Col sm={3}>
                                <input type="range" value = {this.state.sleepQuality} onChange = {this.handleChangeSleepQuality} list="tickmarks"/>
                                  <datalist id="tickmarks">
                                    <option value="0" label="0%"/>
                                    <option value="10"/>
                                    <option value="20"/>
                                    <option value="30"/>
                                    <option value="40"/>
                                    <option value="50" label="50%"/>
                                    <option value="60"/>
                                    <option value="70"/>
                                    <option value="80"/>
                                    <option value="90"/>
                                    <option value="100" label="100%"/>
                                  </datalist>
                                </Col>
                                <Col sm={3} className="SmallText">
                                  Unable to sleep
                                </Col>
                          </Row>
                          <Row>
                                <Label for ="Stress" sm = {3} >Stress:</Label>
                                <Col sm={2} className="SmallText">
                                  Very relaxed
                                </Col>
                                <Col sm={3}>
                                <input type="range" value = {this.state.stress} onChange = {this.handleChangeStress} list="tickmarks"/>
                                  <datalist id="tickmarks">
                                    <option value="0" label="0%"/>
                                    <option value="10"/>
                                    <option value="20"/>
                                    <option value="30"/>
                                    <option value="40"/>
                                    <option value="50" label="50%"/>
                                    <option value="60"/>
                                    <option value="70"/>
                                    <option value="80"/>
                                    <option value="90"/>
                                    <option value="100" label="100%"/>
                                  </datalist>
                                </Col>
                                <Col sm={3} className="SmallText">
                                  Highly stressed
                                </Col>
                          </Row>
                          <Row>
                                <Label for ="Sleep amount" sm = {3} >Sleep amount:</Label>
                                <Col sm={2} className="SmallText">
                                  Less than 6 hours
                                </Col>
                                <Col sm={3}>
                                <input type="range" value = {this.state.sleepAmount} onChange = {this.handleChangeSleepAmount} list="tickmarks"/>
                                  <datalist id="tickmarks">
                                    <option value="0" label="0%"/>
                                    <option value="10"/>
                                    <option value="20"/>
                                    <option value="30"/>
                                    <option value="40"/>
                                    <option value="50" label="50%"/>
                                    <option value="60"/>
                                    <option value="70"/>
                                    <option value="80"/>
                                    <option value="90"/>
                                    <option value="100" label="100%"/>
                                  </datalist>
                                </Col>
                                <Col sm={3} className="SmallText">
                                  More than 9 hours
                                </Col>
                          </Row>
                          <Row>
                                <Label for ="Muscle soreness" sm = {3} >Muscle pain:</Label>
                                <Col sm={2} className="SmallText">
                                  Feeling Great
                                </Col>
                                <Col sm={3}>
                                <input type="range" value = {this.state.muscleSoreness} onChange = {this.handleChangeMuscleSorness} list="tickmarks"/>
                                  <datalist id="tickmarks">
                                    <option value="0" label="0%"/>
                                    <option value="10"/>
                                    <option value="20"/>
                                    <option value="30"/>
                                    <option value="40"/>
                                    <option value="50" label="50%"/>
                                    <option value="60"/>
                                    <option value="70"/>
                                    <option value="80"/>
                                    <option value="90"/>
                                    <option value="100" label="100%"/>
                                  </datalist>
                                </Col>
                                <Col sm={3} className="SmallText">
                                  Very sore
                                </Col>
                          </Row>
                    </div>

                  </ModalBody>

                  <ModalFooter>
                    <Button color="primary" onClick={this.handleSubmit}>Submit</Button>{' '}
                  </ModalFooter>

                </Form>

            </Modal>
        </Container>
      </div>
    );
  }
}

export default ModalFormWellness;
