'use strict';

const express = require("express");
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('db/Chinook_Sqlite.sqlite');
const PORT = process.env.PORT || 3000;

// init app
const app = express();

console.log('# of invoices per country');

app.get("/", (req, res) =>
 {
   db.all(`
     SELECT   COUNT(*) AS count,
              BillingCountry AS country
     FROM     Invoice
     GROUP BY BillingCountry
     ORDER BY count DESC`,
       (err, data) => {
         if (err) throw err;

         console.log(data);
         res.json(data);
       }
   );
 });


app.listen(PORT, () =>
{
  console.log(`App listening on port ${PORT}`);
});
