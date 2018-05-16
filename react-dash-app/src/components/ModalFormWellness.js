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
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Hi{this.props.profileName}, Welcome to wellness survey!!</ModalHeader>
              <ModalBody>
                <div>
                      <Row>
                            <Label for ="Nutrition:" sm = {4} > Nutrition:</Label>
                            <Col sm={8}>
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
                      </Row>
                      <Row>
                            <Label for ="Energy" sm = {4} >Energy:</Label>
                            <Col sm={8}>
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
                      </Row>
                      <Row>
                            <Label for ="Sleep quality" sm = {4} >Sleep quality:</Label>
                            <Col sm={8}>
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
                      </Row>
                      <Row>
                            <Label for ="Stress" sm = {4} >Stress:</Label>
                            <Col sm={8}>
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
                      </Row>
                      <Row>
                            <Label for ="Sleep amount" sm = {4} >Sleep amount:</Label>
                            <Col sm={8}>
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
                      </Row>
                      <Row>
                            <Label for ="Muscle pain" sm = {4} >Muscle pain:</Label>
                            <Col sm={8}>
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
