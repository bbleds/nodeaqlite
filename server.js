'use strict';

const express = require("express");
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('db/Chinook_Sqlite.sqlite');
const PORT = process.env.PORT || 3000;

// init app
const app = express();

console.log('# of invoices per country');

db.all(`
  SELECT   COUNT(*) AS count,
           BillingCountry AS country
  FROM     Invoice
  GROUP BY BillingCountry
  ORDER BY count DESC`,
    (err, res) => {
      if (err) throw err;

      console.log(res);
    }
);

app.get("/", (req, res) =>
 {
   res.send("bruh");
 });


app.listen(PORT, () =>
{
  console.log(`App listening on port ${PORT}`);
});
