const { Category } = require('../models');

const insert = async (name) => {
  const newCategory = await Category.create({ name });

  return newCategory;
};

const listAll = async () => {
  const allCategories = await Category.findAll();

  return allCategories;
};

const listCategoryById = async (id) => {
  const category = await Category.findByPk(id);

  return category;
};

module.exports = {
  insert,
  listAll,
  listCategoryById,
};