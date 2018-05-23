import React, {Component} from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.css';


const styles = {
    paperContainer: {
        height:600 ,
        backgroundImage: `url(${"./field-bg.59a5e231.jpg"})`
    }
};




class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      emailField: '',
      passField: '',
      tokenData: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.skipLogin = this.skipLogin.bind(this);
  }

  submitHandler(evt) {
    evt.preventDefault();
    this.loginData()
    // this.setState({ emailField: '' });
    // this.setState({ passField: ''});
  }

    handleChange(event) {
    this.setState({emailField: event.target.value});
  }
    handlePassChange(event) {
    this.setState({passField: event.target.value});
    }

    skipLogin(tokenData) {
      let emailData = "player2@gmail.com"
      let passwordData = "abc123"
      this.setState({ emailField: emailData })
      this.setState({ passField: passwordData})
    }

loginData(){
  fetch('https://app.komodomonitr.com/api/v1/users/login', {
    body: JSON.stringify({
      "email": this.state.emailField,
      "password": this.state.passField,
    }), // must match 'Content-Type' header
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
  })
  .then(response => response.json())

  .then(data => {this.setState({tokenData: data.token})
    this.props.handlerEmail(this.state.tokenData)})
}



  //chart is drown here
  render()
  {
    return (
  <div className="Login" style={styles.paperContainer}>
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
                   value={this.state.emailField}
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
          <button onClick={this.skipLogin}>
          </button>
      </Row>
    </Container>
  </div>
)
}
}
  export default Login;
