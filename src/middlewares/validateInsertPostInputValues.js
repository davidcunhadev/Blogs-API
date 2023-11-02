const { categoriesService } = require('../services');

const validateInsertPostInputValues = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (!content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (categoryIds.length === 0) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};

const validateInsertPostCategories = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categories = categoryIds
    .map((categoryId) => categoriesService.listCategoryById(categoryId));
  const error = (await Promise.all(categories)).some((cat) => cat === null);
  if (error) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};

module.exports = {
  validateInsertPostInputValues,
  validateInsertPostCategories,
};