const axios = require('axios').default;

const data = {
  pollID: '5be28ef687ead6564b3af204',
  ballots: [
    { id: '5be28ef687ead6564b3af205' },
    { id: '5be28ef687ead6564b3af208' },
    { id: '5be28ef687ead6564b3af208' }
  ]
};

console.log(data);

axios.post('http://localhost:4200/api/vote', data, {
  headers: {
    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTI3YzhmYmE3MzQ2MjMwYTJhMGRjZiIsInVzZXJuYW1lIjoiZHVhbmUxNSIsImlhdCI6MTU0MTU2OTcyMywiZXhwIjoxNTQxOTU4NTIzfQ.znwRF3F1LA8Gu9H3rHZd6CvOvU1OrZV_XiRYWPqbDNo'
  }
}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
