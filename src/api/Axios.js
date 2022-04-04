import axios from 'axios';

var config = {
  method: 'get',
  url: 'https://4917ouizol.execute-api.ap-south-1.amazonaws.com/default/projectAPIs',
  headers: { 
    'x-api-key': 'tVgyl8QS8T3SVxD9XPsWs7xE5Y68YVovaIUxyY41'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
