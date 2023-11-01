const { Category } = require('../models');

const insert = async (name) => {
  const newCategory = await Category.create({ name });

  return newCategory;
};

module.exports = {
  insert,
};