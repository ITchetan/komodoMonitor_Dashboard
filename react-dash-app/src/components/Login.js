import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';
import ReactLoading from 'react-loading';
import Header from './Header'



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
      loginLoad: 'false',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.skipLogin = this.skipLogin.bind(this);
  }

  submitHandler(evt) {
    evt.preventDefault();
    this.setState({ loginLoad: true})
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
      this.props.handlerEmail(this.state.tokenData, this.state.emailField, this.state.passField)})
}



  //chart is drown here
  render()
  {
    return (
  <div className="Login" style={styles.paperContainer}>

  <Container>
    <Header />
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
            <button onClick={this.skipLogin}>
            Default
            </button>
          </form>
            </Col>
      </Row>
      <Row>
        <Col xs="6">
        </Col>
        <Col>
        {this.state.loginLoad === true &&
          <ReactLoading type='spin' color='#d40000'/>}
        {this.props.isLoading === true &&
          <ReactLoading type='spin' color='#d40000'/>}
          </Col>
          </Row>
    </Container>
  </div>
)
}
}
  export default Login;
