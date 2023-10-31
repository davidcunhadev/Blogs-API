const { generateToken } = require('../utils/generateToken');
const { User } = require('../models');

const execute = async (email, password) => {
  const user = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['email', 'password'] },
  });

  if (!user) return null;
  
  const { id, displayName } = user.dataValues;
  const token = generateToken({ id, displayName });
  return token;
};

module.exports = {
  execute,
};