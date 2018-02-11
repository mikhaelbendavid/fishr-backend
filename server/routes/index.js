const portsController = require('../controllers').ports;
const userController = require('../controllers').user;
const transactionController = require('../controllers').transaction;

module.exports = (app) => {

  app.get('/api/user', userController.list);
  app.post('/api/user', userController.create);

  app.get('/api/ports', portsController.list);
  app.post('/api/ports', portsController.create);
  app.get('/api/ports/:id', portsController.retrieve);

  app.get('/api/transactions', transactionController.list);
  app.post('/api/transactions', transactionController.create);
  app.get('/api/transactions/port/:portId', transactionController.listByPort)

};
