import React, {Component} from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.css';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  //chart is drown here
  render()
  {
    return (
  <div className="Login">
  <Container>
    <Row>
  <p>Hello</p>
    </Row>
    <Row>
  <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="" />
        </FormGroup>
        <Button id="login" onClick={this.props.getData}>Submit</Button>
      </Form>
      </Row>
    </Container>
  </div>
)
}
}
  export default Login;
