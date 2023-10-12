
const express = require('express');
const Router = express.Router();

const { fetchApiData } = require('../controllers/Data');

// create route 
Router.route('/users').get(fetchApiData);

module.exports = Router;