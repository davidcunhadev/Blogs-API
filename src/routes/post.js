const route = require('express').Router();
const { postController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

route.get('/', validateToken, postController.listAll);
route.get('/:id', validateToken, postController.listPostById);

module.exports = route;