const route = require('express').Router();
const { postController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');
const {
  validateInsertPostInputValues,
  validateInsertPostCategories,
  validateUpdatePost,
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
route.put('/:id', validateToken, validateUpdatePost, postController.update);
route.delete('/:id', validateToken, postController.deletePost);

module.exports = route;