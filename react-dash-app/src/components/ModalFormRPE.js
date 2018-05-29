import React from 'react';

import { Input, Container,Row,Col,Label,Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup } from 'reactstrap';

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
            <Modal isOpen={this.state.modal} size="sm">
              <ModalHeader>Hi{this.props.profileName}, please complete your RPE survey!!</ModalHeader>
              <ModalBody>
                <div>
                      <Row>
                      <Col sm={1}>
                      </Col>
                      <Col>
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
                      <Button color="secondary" onClick={this.toggle} className='mr-auto'>Absent</Button>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle} className='mr-auto'>Submit</Button>{' '}

              </ModalFooter>
            </Modal>
        </Container>
      </div>
    );
  }
}

export default ModalFormRPE;
