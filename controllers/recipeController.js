const controller = {};

const models = require("../models");

controller.getAll = () => {
  return models.Recipe.findAll();
};

controller.getOne = (id) => {
  return models.Recipe.findOne({ where: { id: id } });
};

module.exports = controller;
