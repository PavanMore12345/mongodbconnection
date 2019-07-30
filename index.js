const express = require('express');
var Db = require('mongodb').Db;
const app = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
Server = require('mongodb').Server;

const port = 3000;

const URL = 'mongodb://pava:pavan@localhost:27017/admin';

app.get('/', (req, res) => {
  MongoClient.connect(URL,{ useNewUrlParser: true }, function(err, res) {
    if (err) {
      console.log("Err",err)
    }else {
      console.log("ress",res)
    }
  })
});



app.listen(port, () => console.info(`REST API running on port ${port}`));