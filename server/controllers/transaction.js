const User = require('../models').User;
const Transaction = require('../models').Transaction;
const Port = require('../models').Port;

module.exports = {
  list(req, res) {
    return Transaction
    .findAll()
    .then((transactions) => res.status(200).send(transactions))
    .catch((error) => res.status(400).send(error))
  },
  listByPort(req, res) {
    return Transaction
    .findAll({
      where: {
        portId: req.params.portId
      },
      include: [
        {
        model: Port,
        as: 'portInfo'
      }
    ]
    })
    .then((transactions) => res.status(200).send(transactions))
    .catch((error) => res.status(400).send(error))
  },
  listByFish(req, res) {
    return Transaction
    .findAll({
      where: {
        speciesId: req.params.speciesId
      },
      include: [
        {
          model: Port,
          as: 'portInfo'
        }
      ]
    })
    then((transactions) => res.status(200).send(transactions))
    .catch((error) => res.status(400).send(error))
  },
  create(req, res) {
    return Transaction
    .create({
      sellerId: req.body.sellerId,
      buyerId: req.body.buyerId,
      speciesId: req.body.fishId,
      portId: req.body.portId,
      price: req.body.price,
      weight: req.body.weight,
      comments: req.body.comments
    })
    .then((transaction) => res.status(200).send(transaction))
    .catch((error) => res.status(400).send(user))
  },
};
