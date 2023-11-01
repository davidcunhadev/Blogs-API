const { categoriesService } = require('../services');

const insert = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categoriesService.insert(name);
  return res.status(201).json(newCategory);
};

const listAll = async (req, res) => {
  const allCategories = await categoriesService.listAll();

  return res.status(200).json(allCategories);
};

module.exports = {
  insert,
  listAll,
};