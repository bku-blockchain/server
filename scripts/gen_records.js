const fake = require('fakerator')();
const fs = require('fs');
const path = require('path');

const users = require('../db/users.json');

const records = [];

users.forEach((u) => {
  u.contacts.forEach((v) => {
    const num = fake.random.number(1, 10);
    for (let i = 0; i < num; i++) {
      records.push({
        userID: u.id,
        partnerID: v,
        note: fake.random.boolean() ? fake.lorem.sentence() : fake.lorem.paragraph(),
        time: fake.date.recent(200)
      });
    }
  });
});

records.sort((a, b) => a.time > b.time);

fs.writeFileSync(path.join(__dirname, '../db/records.json'), JSON.stringify(records, null, 4));
