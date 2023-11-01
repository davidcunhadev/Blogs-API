const { User } = require('../models');
const { generateToken } = require('../utils/generateToken');

const insert = async (displayName, email, password, image) => {
  try {
    const newUser = await User.create({ displayName, email, password, image });
  
    const { id } = newUser.dataValues;
    const token = generateToken({ id });
    return token;
  } catch (error) {
    console.error(error);
  }
};

const listAll = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return allUsers;
};

const listById = async (id) => {
  const user = await User.findByPk({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  return user;
};

module.exports = {
  insert,
  listAll,
  listById,
};