const User = require('../models').User;
const Transaction = require('../models').Transaction;
const Port = require('../models').Port;
const Species = require('../models').Species;

module.exports = {
  list(req, res) {
    return Transaction
    .findAll()
    .then((transactions) => res.status(200).send(transactions))
    .catch((error) => res.status(400).send(error))
  },
  create(req, res) {
    return Transaction
    .create({
      sellerId: req.body.sellerId,
      buyerId: req.body.buyerId,
      fishId: req.body.fishId,
      portId: req.body.portId,
      price: req.body.price,
      weight: req.body.weight,
      comments: req.body.comments
    })
    .then((transaction) => res.status(200).send(transaction))
    .catch((error) => res.status(400).send(user))
  },
};
