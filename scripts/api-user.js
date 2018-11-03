const axios = require('axios').default;
const async = require('async');
const fs = require('fs');
const path = require('path');

const users = require('./db_user.json');

// const url = 'http://bku-blockchain-most.tk/api/fake-user';
const url = 'http://localhost:4200/api/fake-user';

const createdUsers = [];

async.eachSeries(users, (user, cb) => {
  console.log(user);
  axios.post(url, user, { headers: { 'secret-key': '123' } }).then(res => res.data).then((_user) => {
    createdUsers.push({ ...user, id: _user.id });
    cb();
  }).catch(e => cb(e));

}, (err) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }
  console.log('Fake success');
  fs.writeFileSync(path.join(__dirname, './db_user_id.json'), JSON.stringify(createdUsers, null, 4));
  console.log('Write success');
});
