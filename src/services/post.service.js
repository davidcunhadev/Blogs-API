const db = require('../models');
const { BlogPost, User, Category, PostCategory } = require('../models');

const insert = async (user, title, content, categoryIds) => {
  const t = await db.sequelize.transaction();
  try {
    const newPost = await BlogPost.create({
      title,
      content,
      categoryIds,
      userId: user.id,
      published: Date.now(),
      updated: Date.now(), 
    });

    await Promise.all(categoryIds.map((categoryId) =>
      PostCategory.create({ postId: newPost.id, categoryId })));
    await t.commit();
    return newPost;
  } catch (error) {
    await t.rollback();
  }
};

const listAll = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return allPosts;
};

const listPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return post;
};

const update = async (id, user, title, content) => {
  const findUser = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  const t = await db.sequelize.transaction();

  try {
    if (findUser.id !== user.id) {
      return null;
    }

    await BlogPost.update({ title, content }, { where: { id } });
    const updatedPost = await listPostById(id);
    return updatedPost;
  } catch (error) {
    await t.rollback();
  }
};

module.exports = {
  insert,
  listAll,
  listPostById,
  update,
};