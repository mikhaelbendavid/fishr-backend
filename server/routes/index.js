const portsController = require('../controllers').ports;
const speciesController = require('../controllers').species;
const userController = require('../controllers').user;
const transactionController = require('../controllers').transaction;

module.exports = (app) => {

  app.get('/api/user', userController.list);
  app.post('/api/user', userController.create);

  app.get('/api/ports', portsController.list);
  app.post('/api/ports', portsController.create);

  app.get('/api/species', speciesController.list);
  app.post('/api/species', speciesController.create);

  app.get('/api/transactions', transactionController.list);
  app.post('/api/transactions', transactionController.create);

};
