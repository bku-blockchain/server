const fs = require('fs');
const path = require('path');

const users = require('../db/users.json');

const usernames = users.map(u => u.username);

fs.writeFileSync(path.join(__dirname, '../db/usernames.json'), JSON.stringify(usernames, null, 4));
