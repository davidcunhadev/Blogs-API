const { postService } = require('../services');

const insert = async (req, res) => {
  const { user } = req;
  const { title, content, categoryIds } = req.body;
  
  const newPost = await postService.insert(user, title, content, categoryIds);
  
  return res.status(201).json(newPost);
};

const listAll = async (req, res) => {
  const allPosts = await postService.listAll();

  return res.status(200).json(allPosts);
};

const listPostById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.listPostById(id);

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(post);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { user } = req;
  const { title, content } = req.body;

  const updatedPost = await postService.update(id, user, title, content);

  if (!updatedPost) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  return res.status(200).json(updatedPost);
};

module.exports = {
  insert,
  listAll,
  listPostById,
  update,
};