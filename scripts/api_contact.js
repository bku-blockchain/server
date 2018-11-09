const axios = require('axios').default;
const async = require('async');
const fs = require('fs');
const path = require('path');

const users = require('../db/users.json');

// const url = 'http://bku-blockchain-most.tk/api/user/fakeContacts';
const url = 'http://localhost:4200/api/test/fake/contact';

async.eachSeries(users, (user, cb) => {
  const data = {
    userID: user.id,
    contacts: user.contacts
  };
  console.log(data);
  axios.post(url, data, { headers: { 'secret-key': 'abc123xyz' } })
    .then(() => cb()).catch(e => cb(e));
}, (err) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }
  console.log('Fake success');
});
