const axios = require('axios').default;

const data = {
  eventID: 'EV0001',
  ownerID: 'USR0001',
  title: 'Lorem Ipsum',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  startDate: new Date().getTime(),
  endDate: new Date().getTime() + 60 * 60 * 1000,
  candidates: [
    { name: 'The standard Lorem' },
    { name: 'Section 1.10.32 of' },
    { name: 'Bonorum et Malorum' },
    { name: '1914 translation by ' }
  ]
};

console.log(data);

axios.post('http://localhost:4200/api/poll', data, {
  headers: {
    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZDlhYTMxZjdmNTI4MTFmYzJhYTYwNSIsInVzZXJuYW1lIjoibW9zdGMiLCJpYXQiOjE1NDA5OTQ2NzMsImV4cCI6MTU0MTAwMTg3M30.NQtRJkqEpMg5ZWJzR9VzB3HfZwN1vFw5-dMnuJ-GdRQ'
  }
}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
