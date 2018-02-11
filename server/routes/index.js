const portsController = require('../controllers').ports;
const speciesController = require('../controllers').species;
const userController = require('../controllers').user;
const transactionController = require('../controllers').transaction;

module.exports = (app) => {

  app.get('/api/user', userController.list);
  app.post('/api/user', userController.create);

};
