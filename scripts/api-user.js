const axios = require('axios').default;
const async = require('async');

const users = require('./db.json');

// const url = 'http://bku-blockchain-most.tk/api/fake-user';
const url = 'http://localhost:4200/api/fake-user';

async.eachSeries(users, (user, cb) => {
  console.log(user);
  axios.post(url, user, { headers: { 'secret-key': '123' } }).then(() => cb()).catch(e => cb(e));
}, (err) => {
  if (err) console.log(err); else console.log('Success');
  process.exit(0);
});
