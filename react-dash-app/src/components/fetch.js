import React, { Component } from 'react';

class fetch extends Component {

  getData() {

    fetch('http://app.komodomonitr.com/api/v1/users/login', {
      body: JSON.stringify({
        "email": "player2@gmail.com",
        "password": "abc123"
      }), // must match 'Content-Type' header
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
    })

    .then(response => response.json())

    .then(data => {console.log(data); let token = data.token; return token;})

    .then(token => {fetch('http://app.komodomonitr.com/api/v1/data/summary?userId=4',{
      method: 'get',
      headers: {'X-Auth-Token': token}
    })
    .then(response => response.json())
    .then(result => {console.log(result); return result;})
    .then(result => this.setState({ output: result }));
  })
}

}
export default fetch;
