const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/views/static')));

let records = [];

//Get all students
router.get('/', (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

//Create new record
router.post('/add', (req, res) => {
  res.send('New record added.');
});

//delete existing record
router.delete('/', (req, res) => {
  res.send('Deleted existing record');
});

//updating existing record
router.put('/', (req, res) => {
  res.send('Updating existing record');
});

//showing demo records
router.get('/demo', (req, res) => {
  res.json([
    {
      id: '001',
      name: 'Smith',
      email: 'smith@gmail.com',
    },
    {
      id: '002',
      name: 'Sam',
      email: 'sam@gmail.com',
    },
    {
      id: '003',
      name: 'lily',
      email: 'lily@gmail.com',
    },
  ]);
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
