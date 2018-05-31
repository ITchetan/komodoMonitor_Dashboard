import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

class MobileHeader extends Component{
  constructor(props){
    super(props);
    this.state = {

    }

  }
  render()
  {
      return (

        <div className="Header">
        <Container >
          <Row>
            <Col xs={12}>
              <img src='km_white.png' height='75' alt='logo'></img>
            </Col>
          </Row>
        </Container>
        </div>
      );
    }
}

export default MobileHeader;
