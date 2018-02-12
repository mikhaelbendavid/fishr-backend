const User = require('../models').User;
const Transaction = require('../models').Transaction;
const Species = require('../models').Species;

module.exports = {
  list(req, res) {
    return Species
    .findAll()
    .then((species) => res.status(200).send(species))
    .catch((error) => res.status(400).send(error))
  },
  create(req, res) {
    return Species
    .create({
      name: req.body.name,

    })
    .then((specie) => res.status(200).send(specie))
    .catch((error) => res.status(400).send(user))
  },
};
