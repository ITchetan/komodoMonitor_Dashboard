import React from 'react';
import { Container,Row,Col,Label,Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalFormWellness extends React.Component {
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
              <ModalHeader toggle={this.toggle}>Hi{this.props.profileName}, please complete your wellness survey!!</ModalHeader>
              <ModalBody>
                <div>
                      <Row>
                            <Label for ="Nutrition:" sm = {3} > Nutrition:</Label>
                            <Col sm={2} className="SmallText">
                              Very Satisfied
                            </Col>
                            <Col sm={3}>
                              <input type="range" list="tickmarks"/>
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
                            <input type="range" list="tickmarks"/>
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
                            Very fatigued
                            </Col>
                      </Row>
                      <Row>
                            <Label for ="Sleep quality" sm = {3} >Sleep quality:</Label>
                            <Col sm={2} className="SmallText">
                              Very Rested
                            </Col>
                            <Col sm={3}>
                            <input type="range" list="tickmarks"/>
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
                            <input type="range" list="tickmarks"/>
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
                            <input type="range" list="tickmarks"/>
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
                            <input type="range" list="tickmarks"/>
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
                <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
        </Container>
      </div>
    );
  }
}

export default ModalFormWellness;
