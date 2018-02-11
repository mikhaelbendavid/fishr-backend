const User = require('../models').User;
const Transaction = require('../models').Transaction;
const Species = require('../models').Species;
const Port = require('../models').Port;

module.exports = {
  list(req, res) {
    return User
    .findAll()
    .then((users) => res.status(200).send(users))
    .catch((error) => res.status(400).send(error))
  },
  create(req, res) {
    return User
    .create({
      name: req.body.name,
      email: req.body.email,
      seller: req.body.seller,
    })
    .then((user) => res.status(200).send(user))
    .catch((error) => res.status(400).send(user))
  },
};
