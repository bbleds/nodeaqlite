'use strict';

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/Chinook_Sqlite.sqlite');

db.all('SELECT * FROM Employee', (err, res) => {
  console.log(res);
});
