import React from 'react';

import { Form,Input, Container,Row,Col,Label,Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup } from 'reactstrap';

class ModalFormRPE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      buttonLabel:'Wellness Form',
      profileName:props.profileName,
      playerSessionId:props.playerSessionId,
      playerSessionDate:props.playerSessionDate,
    };
    this.handleSubmit_rpe = this.handleSubmit_rpe.bind(this);
    // this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }


  handleSubmit_rpe = (e) =>{

  // method to post the values to RPE API
  let rpeScore;

    fetch('https://app.komodomonitr.com/api/v1/data/rpe?sessionId='+this.props.playerSessionId+'&userId=1', {
      body:JSON.stringify(
      {
      "score": 8

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
            <Modal isOpen={this.state.modal} size="lg">
            <Form onSubmit = {this.handleSubmit_rpe}>
              <ModalHeader>Hi {this.props.profileName},please complete your RPE survey!!
              <br/> Session ID : {this.props.playerSessionId}
              <br/> Date : {this.props.playerSessionDate} </ModalHeader>
              <ModalBody>
                <div>
                      <Row>
                      <br/>
                      <Col sm={5}>
                      <FormGroup >
                        <Label for="Select">Level of Exertion  </Label>
                        <Input type="select" name="select" id="listSelect">
                          <option>6    No exertion at all</option>
                          <option>7</option>
                          <option>7.5  Extremely light</option>
                          <option>8</option>
                          <option>9    Very light</option>
                          <option>10   </option>
                          <option>11   Light</option>
                          <option>12   </option>
                          <option>13   Some what hard</option>
                          <option>14   </option>
                          <option>15   Hard (Heavy)</option>
                          <option>16   </option>
                          <option>17   Very hard</option>
                          <option>18   </option>
                          <option>19   Extremely hard</option>
                          <option>20   Maximal exertion</option>
                        </Input>
                      </FormGroup>
                      </Col>
                      </Row>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.handleSubmit_rpe}>Submit</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Absent</Button>
              </ModalFooter>
              </Form>
            </Modal>
        </Container>
      </div>
    );
  }
}

export default ModalFormRPE;
