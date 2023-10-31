const route = require('express').Router();
const { loginController } = require('../controllers');
const { validateLoginInputValues } = require('../middlewares/validateLoginInputValues');

route.post('/', validateLoginInputValues, loginController.execute);

module.exports = route;