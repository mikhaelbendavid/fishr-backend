const User = require('../models').User;
const Transaction = require('../models').Transaction;
const Port = require('../models').Port;

module.exports = {
  list(req, res) {
    return Port
    .findAll()
    .then((ports) => res.status(200).send(ports))
    .catch((error) => res.status(400).send(error))
  },
  create(req, res) {
    return Port
    .create({
      name: req.body.name,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      latitudeDelta: req.body.latitudeDelta,
      longitudeDelta: req.body.longitudeDelta
    })
    .then((port) => res.status(200).send(port))
    .catch((error) => res.status(400).send(user))
  },
};
