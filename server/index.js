const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/action', (req, res) => {})
app.get('/map', (req, res) => {})
app.get('/trade', (req, res) => {})
app.get('/modify-DNA', (req, res) => {})

app.listen(port, () =>
  console.log(`App is listening on port ${port}.`)
);
