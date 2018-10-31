const axios = require('axios').default;

const data = {
  pollID: '5bd9c575eea19b20c721b540',
  ballots: [
    { id: '5bd9c575eea19b20c721b543' },
    { id: '5bd9c575eea19b20c721b543' },
    { id: '5bd9c575eea19b20c721b542' }
  ]
};

console.log(data);

axios.post('http://localhost:4200/api/vote', data, {
  headers: {
    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZDlhYTMxZjdmNTI4MTFmYzJhYTYwNSIsInVzZXJuYW1lIjoibW9zdGMiLCJpYXQiOjE1NDA5OTQ2NzMsImV4cCI6MTU0MTAwMTg3M30.NQtRJkqEpMg5ZWJzR9VzB3HfZwN1vFw5-dMnuJ-GdRQ'
  }
}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
