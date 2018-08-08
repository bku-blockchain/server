/**
 * Require all files in the directory ./models/*, exclude this file (index.js)
 * It's sync, not use async or callback function
 */

import fs from 'fs';
import path from 'path';

// Read name of files in the directory, it's sync
const filenames = fs.readdirSync(path.join(__dirname, './'));

// Loop each files and require it, exclude this file
filenames.forEach((fname) => {
  if (fname == 'index.js') return;
  // Require file, it's sync
  require(path.join(__dirname, './', fname));
});
