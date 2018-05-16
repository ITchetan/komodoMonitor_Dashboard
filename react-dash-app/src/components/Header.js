import React from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader} from 'reactstrap';

const Header = () => (
  
  <div className="Header" >
  <Container>
        
      <Row>
        

        <Col sm={10}>
            <img src={require('./komodoLogo.png')} alt="Komodo Monitr" />
                     
        </Col>
          
          <Col sm={2}>
          <button ><img src={require('./fakePlayer.jpg')} height="100" width="100" /></button>

          </Col>
          
      </Row>
      
    
  </Container>
  </div>
);

export default Header;