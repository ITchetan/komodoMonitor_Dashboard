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

    }
  }

  //chart is drown here
  render()
  {
    return (
  <div className="Login" style={styles.paperContainer}>
  <Container>
    <Row>
  <p>Hello</p>
    </Row>
    <Row>
  <Form inline onSubmit={this.props.handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="" />
        </FormGroup>
        <Button id="login" value={this.props.value} onChange={this.props.handleChange} onClick={this.props.getData}>Submit</Button>
      </Form>
      </Row>
    </Container>
  </div>
)
}
}
  export default Login;
