const fs = require('fs');
const path = require('path');
const fake = require('fakerator')();

let users = require('../db/users.json');

const userIDs = users.map(o => o.id);

const randIDs = () => userIDs[Math.round(Math.random() * (userIDs.length - 1))];

users = users.map((o) => {
  o.contacts = [];
  const num = Math.round(Math.random() * userIDs.length);
  for (let i = 0; i < num; i++) {
    const id = randIDs();
    if (id != o.id && o.contacts.indexOf(id) == -1) o.contacts.push(id);
  }
  return o;
});

fs.writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(users, null, 4));
