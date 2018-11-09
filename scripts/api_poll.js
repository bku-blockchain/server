const axios = require('axios').default;

const data = require('../db/polls.json')[9];

console.log(data);

axios.post('http://localhost:4200/api/poll', data, {
  headers: {
    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTU4OTMyNTA3NTBmNGU1ODZmZDYyZCIsInVzZXJuYW1lIjoicmVuZS5ib3llcjAyMzEiLCJpYXQiOjE1NDE3Nzk2MzMsImV4cCI6MTU0MjE2ODQzM30.kjwNNgJgRW2AoenCpnuaHtbQE1ljXmMXU1xyOxmZHTU'
  }
}).then(res => res.data)
  .then(res => console.log(res))
  .catch(err => console.log(err));
