import React, {Component} from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.css';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputField: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(evt) {
    evt.preventDefault();
    this.props.handlerEmail(this.state.inputField);

    this.setState({ inputField: '' });
  }

    handleChange(event) {
    this.setState({inputField: event.target.value});
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
    <form onSubmit={this.submitHandler}>
            <input type="text"
                   id="theInput"
                   value={this.state.inputField}
                   onChange={this.handleChange} />
            <input type="submit" />
          </form>
      </Row>
    </Container>
  </div>
)
}
}
  export default Login;
