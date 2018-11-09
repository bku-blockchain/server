const axios = require('axios').default;
const async = require('async');
const fs = require('fs');
const path = require('path');

const data = require('../db/records.json');

const url = 'http://localhost:4200/api/test/fake/record';

const created = [];

async.eachSeries(data, (d, cb) => {
  console.log(d);
  axios.post(url, d, { headers: { 'secret-key': 'abc123xyz' } })
    .then(res => res.data).then((t) => {
      created.push({ id: t.id, ...d });
      cb();
    }).catch(e => cb(e));

}, (err) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }
  console.log('Fake success');
  fs.writeFileSync(path.join(__dirname, '../db/records.json'), JSON.stringify(created, null, 4));
  console.log('Write success');
});
