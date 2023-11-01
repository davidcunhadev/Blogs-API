const { userService } = require('../services');

const insert = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = await userService.insert(displayName, email, password, image);
  if (!token) {
    return res.status(409).json({ message: 'User already registered' });
  }

  return res.status(201).json({ token });
};

const listAll = async (req, res) => {
  const allUsers = await userService.listAll();

  return res.status(200).json(allUsers);
};

const listById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.listById(id);

  return res.status(200).json(user);
};

module.exports = {
  insert,
  listAll,
  listById,
};