// Create web server
// Run: node comments.js
// Test: curl -X POST http://localhost:3000/comments -d '{"comment": "Hello"}' -H 'Content-Type: application/json'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/comments', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Path: comments.js
// Create web server
// Run: node comments.js
// Test: curl -X POST http://localhost:3000/comments -d '{"comment": "Hello"}' -H 'Content-Type: application/json'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/comments', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Path: comments.js
// Create web server
// Run: node comments.js
// Test: curl -X POST http://localhost:3000/comments -d '{"comment": "Hello"}' -H 'Content-Type: application/json'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/comments', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Path: comments.js
// Create web server
// Run: node comments.js
// Test: curl -X POST http://localhost:3000/comments -d '{"comment": "Hello"}' -H 'Content-Type: application/json'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/comments', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Path: comments.js
// Create web server
// Run: node comments.js