function login(url, data) {
  // login with url and body data
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(function(response) {
      return response.json();
    })
}

function getData(token, endPoint){ //retreives the token from the login function and passes it to the auth header in the get
  fetch('http://app.komodomonitr.com/api/v1' + endPoint,{
  method: 'get',
  headers: {'X-Auth-Token': token}
  })
  .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      wellnessScore = myJson["wellness"]["data"]["total_rating"];
      workloadScore = myJson['workload']['data'][myJson.workload.data.length -1]['score'];
      workloadLower = myJson['workload']['data'][myJson.workload.data.length -1]['target_min'];
      workloadUpper = myJson['workload']['data'][myJson.workload.data.length -1]['target_max'];
      exertionScore = myJson['rpe']['data'][myJson.rpe.data.length -1]['score'];
      console.log(wellnessScore);
      console.log(workloadScore);
      console.log(workloadLower);
      console.log(workloadUpper);
      console.log(exertionScore);
      drawGauge('Wellness', wellnessScore, 15, 20, 30, '.chart-gauge', 'green', 'orange', 'red');
      drawGauge('Workload', workloadScore, workloadLower, workloadUpper, 20000, '.gauge-workload', 'blue', 'green', 'red');
      drawGauge('Exertion', exertionScore, 5000, 8000, 12000, '.gauge-exertion', 'blue', 'green', 'red');

    });
  }
