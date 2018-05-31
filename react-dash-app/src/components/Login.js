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
      logInAgain: 'false',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.skipLogin = this.skipLogin.bind(this);
    this.setCookie = this.setCookie.bind(this);
    this.getCookie = this.getCookie.bind(this);
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

    setCookie(cvalue) {
    document.cookie = "token=" + cvalue + ";path=/";
    }

    getCookie(){
      let name = "token=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return false;
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
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error;
    }
    })

  .then(data => {this.setState({tokenData: data.token})
      this.props.handlerEmail(this.state.tokenData)
      this.setCookie(this.state.tokenData)
      })
  .catch((error) => {
    this.setState({ logInAgain: true,
                    loginLoad: false })
  });
}

componentDidMount(){
    if (this.getCookie() !== false && this.props.isLoading !== true && this.props.loginFailed === false) {
    this.props.handlerEmail(this.getCookie())
    }
  }



  //chart is drown here
  render()
  {
  console.log(this.getCookie())

    return (

  <div className="Login" style={styles.paperContainer}>
    <Header showProfile={false}/>
  <Container fluid={true}>


    <Row>&nbsp;</Row>
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
        {this.props.loginFailed === true &&
            <p>Please log in again</p>}
          </Col>
          </Row>
          <Row>
          <Col xs="5">
          </Col>
          <Col>
          {this.state.logInAgain === true &&
              <p>Wrong Username/Password</p>}
          </Col>
          </Row>
    </Container>
  </div>
)
}
}
  export default Login;
