import React, {Component} from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader} from 'reactstrap';
import { HomeIcon, HeartPulseIcon, MedicalBagIcon, RunFastIcon } from 'mdi-react';

class Header extends Component{
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
              <Col sm={10}>
                  <img src={require('./komodo.png')} alt="Komodo Monitr" height="50" />
                  <span className="BrandName">KOMODO </span><span className="SubBrand">MONITR</span>

              </Col>

                <Col sm={2}>


                    <div style={{ textAlign: 'center' }}>
                      {this.props.view === "profile" &&
                      <img src={require('./fakePlayer.jpg')} height="200" width="80" />}
                      {this.props.view !== "profile" &&
                      <a onClick={this.props.changeProfile}><img src={require('./fakePlayer.jpg')} height="80" width="80" /></a>}
                      <a onClick={this.props.logout}>Logout</a>
                      <a onClick={this.props.cookie}>cookie</a>
                    </div>

                </Col>

            </Row>

        </Container>
        </div>
      );
    }
}

export default Header;
