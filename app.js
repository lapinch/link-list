'use strict';
const {find} = require('./index');
const Joi = require('joi');
const schema = Joi.object().keys({
     data1: Joi.array().items(Joi.any()),
     data2: Joi.array().items(Joi.any())
});

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// configure app to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/find', (req, res) => {res.send(find())});
app.post('/find', (req, res) => {
  // schema validate that data in format array 
  const error = schema.validate(req.body);
  if (error && error.error) {
    res.send('data format should by an array')
  }

  const initialData1 = req.body && req.body.data1 ? req.body.data1 : null;
  const initialData2 = req.body && req.body.data2 ? req.body.data2 : null;
  res.send(find(initialData1, initialData2))
});

var port = process.env.PORT || 1337;

app.listen(port);