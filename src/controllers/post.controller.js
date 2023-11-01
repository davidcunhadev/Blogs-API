const { postService } = require('../services');

const listAll = async (req, res) => {
  const allPosts = await postService.listAll();

  return res.status(200).json(allPosts);
};

module.exports = {
  listAll,
};