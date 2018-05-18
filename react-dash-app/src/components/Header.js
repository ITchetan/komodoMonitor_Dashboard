import React from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader} from 'reactstrap';

const Header = () => (

  <div className="Header">
  <Container  >

      <Row>


        <Col sm={10}>
            <img src={require('./komodo.png')} alt="Komodo Monitr" height="50" />
            <span className="BrandName">KOMODO </span><span className="SubBrand">MONITR</span>

        </Col>

          <Col sm={2}>
          <button><img src={require('./fakePlayer.jpg')} height="80" width="80" /></button>

          </Col>

      </Row>

  </Container>
  </div>
);

export default Header;
