const fake = require('fakerator')();
const fs = require('fs');
const path = require('path');

const positions = [
  'Operations manager',
  'Quality control, safety, environmental manager.',
  'Accountant, bookkeeper, controller',
  'Office manager.',
  'Receptionist',
  'Foreperson, supervisor, lead person',
  'Marketing manager',
  'Purchasing manager',
  'Shipping and receiving person or manager',
  'Professional staff'
];

const fakeUser = () => {
  const firstName = fake.names.firstName();
  const lastName = fake.names.lastName();
  const username = fake.internet.userName(firstName, lastName);
  const email = fake.internet.email(firstName, lastName);
  const tel = fake.phone.number();
  const photoUrl = fake.internet.avatar();
  const company = fake.company.name();
  const position = positions[Math.floor(Math.random() * positions.length)];
  const password = 1;

  return {
    username, email, password, tel, firstName, lastName, photoUrl, position, company
  };
};

const users = [];
for (let i = 0; i < 20; i++) {
  users.push(fakeUser());
}


fs.writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(users, null, 4));
