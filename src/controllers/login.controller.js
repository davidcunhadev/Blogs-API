const { loginService } = require('../services');

const execute = async (req, res) => {
  const { email, password } = req.body;

  const token = await loginService.execute(email, password);
  if (!token) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  return res.status(200).json({ token });
};

module.exports = {
  execute,
};