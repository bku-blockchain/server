const axios = require('axios').default;
const async = require('async');
const fs = require('fs');
const path = require('path');

const contacts = require('./db_contacts.json');

// const url = 'http://bku-blockchain-most.tk/api/user/fakeContacts';
const url = 'http://localhost:4200/api/user/fakeContacts';

async.eachSeries(contacts, (contact, cb) => {
  console.log(contact);
  axios.post(url, contact, { headers: { 'secret-key': '123',
    'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZGQwMGNiMGY2YTliMTBiYzhjY2RlZCIsInVzZXJuYW1lIjoiamVzdXNfdG9ycCIsImlhdCI6MTU0MTIxMDM4MywiZXhwIjoxNTQxMjE3NTgzfQ.j6q9nTZ3cLxsjwOUth2WdEad0_L_GtqYDPYEG7NMuk8'
  } }).then(() => cb()).catch(e => cb(e));

}, (err) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }
  console.log('Fake success');
});
