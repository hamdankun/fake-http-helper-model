const Sequelize = require('sequelize');
const path = require('path');

module.exports = new Sequelize(`sqlite:${path.join(__dirname, '../')}db/fakehttp.db`)
