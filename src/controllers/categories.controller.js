const { categoriesService } = require('../services');

const insert = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categoriesService.insert(name);
  return res.status(201).json(newCategory);
};

module.exports = {
  insert,
};