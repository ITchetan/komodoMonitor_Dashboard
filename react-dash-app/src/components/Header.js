import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

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
        <Container fluid={true}>
          <Row>
              <Col sm={10}>
              <img src='km_white.png' height='75' alt='logo'></img>
              </Col>

                <Col sm={2}>

                  {this.props.showProfile !== false &&
                    <div style={{ textAlign: 'center' }}>
                      {this.props.view === "profile" &&
                      <img className="profileNoClick" src={this.props.playerImage} alt="" height="80" width="80"  />}
                      {this.props.view !== "profile" &&
                      <a onClick={this.props.changeProfile}><img className="profile" src={this.props.playerImage} alt="" height="80" width="80" /></a>}

                    </div>
                  }

                </Col>

            </Row>

        </Container>
        </div>
      );
    }
}

export default Header;
