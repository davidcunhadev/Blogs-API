const route = require('express').Router();
const { postController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');
const {
  validateInsertPostInputValues,
  validateInsertPostCategories,
} = require('../middlewares/validateInsertPostInputValues');

route.post(
  '/',
  validateToken,
  validateInsertPostInputValues,
  validateInsertPostCategories,
  postController.insert,
);
route.get('/', validateToken, postController.listAll);
route.get('/:id', validateToken, postController.listPostById);

module.exports = route;