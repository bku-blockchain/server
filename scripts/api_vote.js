const axios = require('axios').default;

const data = {
  pollID: '5bea36ee2c31b43fae223f02',
  ballots: [
    { id: '5bea36ee2c31b43fae223f0a' },
    { id: '5bea36ee2c31b43fae223f09' }
  ]
};

const users = ['roxanne_herman95', 'dan_thompson', 'ted_smith00', 'elias47'];

const token = [
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTc4NGVkNmRiMjYxNGI3ZGNkNTY0MSIsInVzZXJuYW1lIjoicm94YW5uZV9oZXJtYW45NSIsImlhdCI6MTU0MjA3MzcxMiwiZXhwIjoxNTQyNDYyNTEyfQ.0bx4iSVvrI7w2EaQTAAzaMqqlmn02hHXkoQGlVUxnxI',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTc4NGVkNmRiMjYxNGI3ZGNkNTY0NSIsInVzZXJuYW1lIjoiZGFuX3Rob21wc29uIiwiaWF0IjoxNTQyMDc4MTM1LCJleHAiOjE1NDI0NjY5MzV9.QTVTUpAuYST05-SZ4zHLmFPT9eIxnFI5g4xrzQsxrfo',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTc4NGVkNmRiMjYxNGI3ZGNkNTY0OCIsInVzZXJuYW1lIjoidGVkX3NtaXRoMDAiLCJpYXQiOjE1NDIwNzgxNTIsImV4cCI6MTU0MjQ2Njk1Mn0.Un969h8ITYj-s1RfiAL_0iiQndImpPsIUSvMQX3hwCk',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTc4NGVkNmRiMjYxNGI3ZGNkNTY0YyIsInVzZXJuYW1lIjoiZWxpYXM0NyIsImlhdCI6MTU0MjA3ODE2NiwiZXhwIjoxNTQyNDY2OTY2fQ.gQyhPaYtz8kOdyyI7JOMQoeaZgDQeQnV_reL18U8UR4'
];

const randomID = [
  '5bea36ee2c31b43fae223f08',
  '5bea36ee2c31b43fae223f06',
  '5bea36ee2c31b43fae223f05',
  '5bea36ee2c31b43fae223f04'
];

token.forEach((t, i) => {
  const body = { ...data };
  body.ballots = [...body.ballots, { id: randomID[i] }];
  console.log(body);

  axios.post('http://localhost:4200/api/vote', data, {
    headers: {
      authorization: t
    }
  }).then(res => console.log(res)).catch(err => console.log(err));
});
