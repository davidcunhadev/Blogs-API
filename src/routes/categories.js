const route = require('express').Router();
const { categoriesController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');
const validateInsertCategoryValues = require('../middlewares/validateInsertCategoryInputValues');

route.post('/', validateInsertCategoryValues, validateToken, categoriesController.insert);
route.get('/', validateToken, categoriesController.listAll);

module.exports = route;