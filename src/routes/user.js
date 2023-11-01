const route = require('express').Router();
const { userController } = require('../controllers');
const validateInsertUserInputValues = require('../middlewares/validateInsertUserInputValues');
const validateToken = require('../middlewares/validateToken');

route.post('/', validateInsertUserInputValues, userController.insert);
route.get('/', validateToken, userController.listAll);
route.get('/:id', validateToken, userController.listById);

module.exports = route;