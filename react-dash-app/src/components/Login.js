import React, {Component} from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.css';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputField: '',
      passField: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
  }

  submitHandler(evt) {
    evt.preventDefault();
    this.props.handlerEmail(this.state.inputField, this.state.passField);

    this.setState({ inputField: '' });
    this.setState({ passField: ''});
  }

    handleChange(event) {
    this.setState({inputField: event.target.value});
  }
    handlePassChange(event) {
    this.setState({passField: event.target.value});
    }


  //chart is drown here
  render()
  {
    return (
  <div className="Login">
  <Container>
    <Row>
    <Col sm={10}>
        <img src={require('./komodo.png')} alt="Komodo Monitr" height="50" />
        <span className="BrandName">KOMODO </span><span className="SubBrand">MONITR</span>

    </Col>
    </Row>
    <Row>
    <Col className="text-center">
    <h5>Welcome to Komodo Monitr, please Log in</h5>
    </Col>
    </Row>
    <Row>
    <Col className="text-center">
    <form onSubmit={this.submitHandler}>
            <p>Email</p>
            <input type="text"
                   id="theInput"
                   value={this.state.inputField}
                   onChange={this.handleChange}
                    />
              <p>Password</p>
             <input type="text"
                    id="theInput2"
                    value={this.state.passField}
                    onChange={this.handlePassChange}
                     />
                     <p/>
            <input type="submit" />
          </form>
            </Col>
          <button onClick={this.props.skipLogin}>
          </button>
      </Row>
    </Container>
  </div>
)
}
}
  export default Login;
