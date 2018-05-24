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
              <img src={require('./komodo.png')} alt="Komodo Monitr" height="50" />
              <span className="BrandName">KOMODO </span><span className="SubBrand">MONITR</span>
            </Col>
          </Row>
        </Container>
        </div>
      );
    }
}

export default MobileHeader;
