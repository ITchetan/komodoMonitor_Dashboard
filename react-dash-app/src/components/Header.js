import React from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader} from 'reactstrap';
import { HomeIcon, HeartPulseIcon, MedicalBagIcon, RunFastIcon } from 'mdi-react';

const Header = (props) => (

  <div className="Header">
  <Container  >

      <Row>


        <Col sm={10}>
            <img src={require('./komodo.png')} alt="Komodo Monitr" height="50" />
            <span className="BrandName">KOMODO </span><span className="SubBrand">MONITR</span>

        </Col>

          <Col sm={2}>
              <a><img src={require('./fakePlayer.jpg')} height="80" width="80" /></a>

          </Col>

      </Row>

  </Container>
  </div>
);

export default Header;
