const express = require('express');
const { showHomePage } = require('../controllers/pages-controller')

const homerouter = express.Router();

homerouter.get('/', showHomePage)

module.exports = homerouter;
