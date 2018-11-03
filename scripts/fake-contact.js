const fs = require('fs');
const path = require('path');
const fake = require('fakerator')();

const users = require('./db_user_id.json');

const userIDs = users.map(o => o.id);

const randIDs = () => userIDs[Math.round(Math.random() * (userIDs.length - 1))];

const data = users.map((o) => {
  const data = {
    userID: o.id,
    contacts: []
  };
  const num = Math.round(Math.random() * 8);
  for (let i = 0; i < num; i++) {
    const id = randIDs();
    if (id != o.id && data.contacts.indexOf(id) == -1) data.contacts.push(id);
  }
  data.contacts = data.contacts.map(id => ({
    uid: id,
    note: fake.lorem.sentence()
  }));

  return data;
});

fs.writeFileSync(path.join(__dirname, './db_contacts.json'), JSON.stringify(data, null, 4));
