const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./controllers/db');

app.use(cors());
 
const port = 8080;

app.use('/', require('./routes'));

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});

const dbPort = 3000;
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(dbPort);
    console.log(`Connected to DB and listening on ${dbPort}`);
  }
});