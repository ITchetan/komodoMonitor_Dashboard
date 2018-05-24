import React from 'react';
import { Container,Row,Col,Label,Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalFormRPE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      buttonLabel:'Wellness Form',
      profileName:props.profileName
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div className = "ModalForm">
      <Container>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
              <ModalHeader toggle={this.toggle}>Hi{this.props.profileName}, please complete your RPE survey!!</ModalHeader>
              <ModalBody>
                <div>
                      <Row>
                            <Label for ="#10" sm = {1} >#10</Label>
                            <Col sm={2} className="Emoji">
                              place holder
                            </Col>
                            <Col className="Percieved Exertion " sm={8}>
                              Iam Dead!!!
                            </Col>
                            <Col sm={1}>
                                <input type="radio" name="radio1" />{' '}
                            </Col>
                      </Row>
                      <Row>
                            <Label for ="#9" sm = {1} >#9</Label>
                            <Col sm={2} className="Emoji">
                              Place holder
                            </Col>
                            <Col className="Percieved Exertion " sm={8}>
                              Iam probably going to die!
                            </Col>
                            <Col sm={1}>
                                <input type="radio" name="radio1" />{' '}
                            </Col>
                      </Row>

                      <Row>
                            <Label for ="#8" sm = {1} >#8</Label>
                            <Col sm={2} className="Emoji">
                              Place holder
                            </Col>
                            <Col className="Percieved Exertion " sm={8}>
                              I can grunt inresponse to your questions and can only keep this pace for a short period of time.
                            </Col>
                            <Col sm={1}>
                                <input type="radio" name="radio1" />{' '}
                            </Col>
                      </Row>

                      <Row>
                            <Label for ="#7" sm = {1} >#7</Label>
                            <Col sm={2} className="Emoji">
                              Place holder
                            </Col>
                            <Col className="Percieved Exertion " sm={8}>
                              I can still talk but i really don/'t'want to and i am sweating like a pig!
                            </Col>
                            <Col sm={1}>
                                <input type="radio" name="radio1" />{' '}
                            </Col>
                      </Row>

                      <Row>
                            <Label for ="#6" sm = {1} >#6</Label>
                            <Col sm={2} className="Emoji">
                              Place holder
                            </Col>
                            <Col className="Percieved Exertion " sm={8}>
                              I can still talk but i am sligthly breathless and definetly sweating.
                            </Col>
                            <Col sm={1}>
                                <input type="radio" name="radio1" />{' '}
                            </Col>
                      </Row>

                      <Row>
                            <Label for ="#5" sm = {1} >#6</Label>
                            <Col sm={2} className="Emoji">
                              Place holder
                            </Col>
                            <Col className="Percieved Exertion " sm={8}>
                              I am just above confortable, I am sweating more and can talk easily.
                            </Col>
                            <Col sm={1}>
                                <input type="radio" name="radio1" />{' '}
                            </Col>
                      </Row>

                      <Row>
                            <Label for ="#4" sm = {1} >#4</Label>
                            <Col sm={2} className="Emoji">
                              Place holder
                            </Col>
                            <Col className="Percieved Exertion " sm={8}>
                              I am sweating a little, but i feel good and i can carry on a conversion compfortably.
                            </Col>
                            <Col sm={1}>
                                <input type="radio" name="radio1" />{' '}
                            </Col>
                      </Row>

                      <Row>
                            <Label for ="#3" sm = {1} >#3</Label>
                            <Col sm={2} className="Emoji">
                              Place holder
                            </Col>
                            <Col className="Percieved Exertion " sm={8}>
                              I am still compfortable, but i am breathing a bit harder.
                            </Col>
                            <Col sm={1}>
                                <input type="radio" name="radio1" />{' '}
                            </Col>
                      </Row>


                      <Row>
                            <Label for ="#2" sm = {1} >#2</Label>
                            <Col sm={2} className="Emoji">
                              Place holder
                            </Col>
                            <Col className="Percieved Exertion " sm={8}>
                              I am compfortable and i can maintain this pace all day long.
                            </Col>
                            <Col sm={1}>
                                <input type="radio" name="radio1" />{' '}
                            </Col>
                      </Row>

                      <Row>
                            <Label for ="#1" sm = {1} >#1</Label>
                            <Col sm={2} className="Emoji">
                              Place holder
                            </Col>
                            <Col className="Percieved Exertion " sm={8}>
                              i am resting.
                            </Col>
                            <Col sm={1}>
                                <input type="radio" name="radio1" />{' '}
                            </Col>
                      </Row>

                </div>

              </ModalBody>

              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
        </Container>
      </div>
    );
  }
}

export default ModalFormRPE;
