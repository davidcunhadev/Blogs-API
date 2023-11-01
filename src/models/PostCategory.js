const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  },
   {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false
   })

   PostCategory.associate = ({Category, BlogPost}) => {
    Category.belongsToMany(BlogPost,{
      as: 'blogPost',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    BlogPost.belongsToMany(Category, {
      as: 'category',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    })
   }

   return PostCategory;
}

module.exports = PostCategorySchema;