const axios = require('axios').default;

const data = require('../db/polls.json')[15];

console.log(data);

axios.post('http://localhost:4200/api/poll', data, {
  headers: {
    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTc4NGVkNmRiMjYxNGI3ZGNkNTY0MSIsInVzZXJuYW1lIjoicm94YW5uZV9oZXJtYW45NSIsImlhdCI6MTU0MjA3MzcxMiwiZXhwIjoxNTQyNDYyNTEyfQ.0bx4iSVvrI7w2EaQTAAzaMqqlmn02hHXkoQGlVUxnxI'
  }
}).then(res => res.data)
  .then(res => console.log(res))
  .catch(err => console.log(err));
