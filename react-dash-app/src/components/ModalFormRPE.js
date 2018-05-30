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
      rpeScore:0,
    };
    this.handleSubmit_rpe = this.handleSubmit_rpe.bind(this);
    // this.toggle = this.toggle.bind(this);
    // this.handleChangeScore = this.handleChangeScore.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleChangeScore = (e) => {
    let strScore = e.target.value
    let numSpace = strScore.slice(0,2)
    let num = numSpace.trim()
    let realnum = parseInt(num)

    console.log(realnum)

    this.setState({
        rpeScore: realnum
      })

  }


  handleSubmit_rpe = (e) =>{

  // method to post the values to RPE API


  let rpeScore = this.state.rpeScore;

  console.log(rpeScore);
    console.log(this.props.playerSessionId)

    fetch('https://app.komodomonitr.com/api/v1/data/rpe?sessionId='+this.props.playerSessionId+'&userId=1', {
      body:JSON.stringify(
      {
      "score": rpeScore

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
                      <Col sm={1}>
                      </Col>
                      <Col>
                        <FormGroup >
                        <Label for="Select">Level of Exertion  </Label>
                        <Input type="select" name="select" id="listSelect" onChange = {this.handleChangeScore}>
                          <option>0    Absent</option>
                          <option>6    No exertion at all</option>
                          <option>7</option>
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

                <Button color="primary" onClick={this.handleSubmit_rpe} className='mr-auto'>Submit</Button>{' '}


              </ModalFooter>
              </Form>
            </Modal>
        </Container>
      </div>
    );
  }
}

export default ModalFormRPE;
