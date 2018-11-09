const axios = require('axios').default;

const data = {
  eventID: 'EVT_0000001',
  ownerID: 'USR_0000001',
  title: 'Bình chọn VTV Awards 2018',
  description: '',
  startDate: Math.round(new Date().getTime()) - 5 * 24 * 60 * 60 * 1000,
  endDate: Math.round(new Date().getTime()) + 30 * 24 * 60 * 60 * 1000,
  photoUrl: '',
  candidates: [
    { name: 'At vero eos et accusamus et iusto odio dignissimos ducimus' },
    { name: 'On the other hand, we denounce with righteous indignation' },
    { name: 'But in certain circumstances and owing to the claims of duty' },
    { name: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium' }
  ]
};

console.log(data);

axios.post('http://localhost:4200/api/poll', data, {
// axios.post('http://bku-blockchain-most.tk/api/poll', data, {
  headers: {
    // authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZGQwNWNjMmU5ZWE2MjJiNzZlNDc1ZSIsInVzZXJuYW1lIjoiZHVhbmUxNSIsImlhdCI6MTU0MTU3MDc2OCwiZXhwIjoxNTQxOTU5NTY4fQ.dg4UnRuVu1R2L27wYsdm5g_0bQkoilJ4sngblJtFYM8'
    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTI3YzhmYmE3MzQ2MjMwYTJhMGRjZiIsInVzZXJuYW1lIjoiZHVhbmUxNSIsImlhdCI6MTU0MTU2OTcyMywiZXhwIjoxNTQxOTU4NTIzfQ.znwRF3F1LA8Gu9H3rHZd6CvOvU1OrZV_XiRYWPqbDNo'
  }
}).then(res => res.data)
  .then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
