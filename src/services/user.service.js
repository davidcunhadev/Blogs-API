const { User } = require('../models');
const { generateToken } = require('../utils/generateToken');

const insert = async (displayName, email, password, image) => {
  try {
    const newUser = await User.create({ displayName, email, password, image });
  
    console.log(newUser);
    const { id } = newUser.dataValues;
    const token = generateToken({ id });
    return token;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  insert,
};