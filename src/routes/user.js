const route = require('express').Router();
const { userController } = require('../controllers');
const validateInsertUserInputValues = require('../middlewares/validateInsertUserInputValues');

route.post('/', validateInsertUserInputValues, userController.insert);

module.exports = route;