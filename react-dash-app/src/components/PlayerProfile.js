import React, {Component} from 'react';
import { Container, Col, Button } from 'reactstrap';
import { PlusBoxOutlineIcon, LogoutIcon } from 'mdi-react';
import '../App.css';



class PlayerProfile extends Component{
  constructor(props){
    super(props);
    this.state = {
      playerFirstData:props.playerFirstData,
      playerLastData:props.playerLastData,
      page: "profile",
      file: null,
    }
    this.changeProfileImage = this.changeProfileImage.bind(this);
    this.changeProfile = this.changeProfile.bind(this);
    this.confirmUpload = this.confirmUpload.bind(this);
  }

  onDrag= event => { event.preventDefault()}

  onDrop = event => { event.preventDefault()
                      let file = event.dataTransfer.files[0]
                      this.setState({ file })
                      this.setState({ page: "imageConfirm" })
                    }

  changeProfileImage(){
    this.setState({ page: "image" })
  }

  changeProfile(){
    this.setState({ page: "profile" })
  }

  confirmUpload(){

  fetch('https://app.komodomonitr.com/api/v1/players/1/image', {
    body:JSON.stringify(
    {
      'image': this.props.file,
  }) ,
    // must match 'Content-Type' header
    headers: {
      'Accept' : 'application/json',
      'Content-type': 'multipart/form-data',
      'X-Auth-Token': this.props.loginToken
    },
    method: 'PUT',
  });

  this.setState({ page: "profile" })
}


  render(){

    let { file } = this.state
    let url = file && URL.createObjectURL(file)

    console.log(this.props.playerFirstData);

    return (
      <div >
      <Container  >

            <Col >
                <img className="profile" src={this.props.playerImage} alt="" width="50%" height="auto"  />
            </Col>

            <br />

            <Col >
                <h4><strong> {this.props.playerFirstData[0]} {this.props.playerLastData[0]} </strong></h4>
                <p><Button color="primary" onClick={this.props.logout}>Logout <LogoutIcon size={14} color='#fff' /></Button></p>
                {this.state.page === "profile" && <Button color="secondary" onClick={this.changeProfileImage}> Upload new photo </Button>}
                {this.state.page === "image" && <div className="dropImage" onDragOver={this.onDrag} onDrop={this.onDrop}>
                  <p>Drop an image</p>
                  <PlusBoxOutlineIcon/>
                  <p>
                  here
                  </p>
                  </div>}

                  {this.state.page === "imageConfirm" &&
                  <div>
                  <Button color="secondary" onClick={this.changeProfile} >Cancel</Button>
                  <Button color="primary" onClick={this.confirmUpload} >Confirm</Button>
                  <div>
                  <img src={url} alt="" />
                  </div>
                  </div>}

            </Col>
            
      </Container>
      </div>
    )
  }
}

//exporting class to use in other files
export default PlayerProfile;
