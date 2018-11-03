const axios = require('axios').default;

axios.post(
  'http://localhost:4200/api/user/contacts', {
    contacts: [
      { uid: '5bdbeb3c148cde1779c4e6b6', note: 'Hello You' },
      { uid: '5bdbeb3c148cde1779c4e6c7', note: 'Xin Chao' },
      { uid: '5bdbeb3c148cde1779c4e6d2', note: 'Chao Ban' }
    ]
  },
  { headers: { authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZGJlYjNjMTQ4Y2RlMTc3OWM0ZTZiNSIsInVzZXJuYW1lIjoicm9zYS5sZW1rZTE4MTYiLCJpYXQiOjE1NDEyMDQ3NzIsImV4cCI6MTU0MTIxMTk3Mn0.uCo0pblPa6lqdAEJgPeTTT_lZJWjshgEXSDU328mhKw' }
  }
).then(() => console.log('OK')).catch(err => console.log(err));
