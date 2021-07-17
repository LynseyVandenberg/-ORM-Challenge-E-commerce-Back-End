// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
// "You'll need to execute association methods on your Sequelize models to create the following relationships between them" !!!
// Products belongsTo Category - https://sequelize.org/v5/class/lib/associations/belongs-to.js~BelongsTo.html
Product.belongsTo(Category, {foreignKey: 'category_id'});


// Categories have many Products - https://sequelize.org/v5/class/lib/associations/has-many.js~HasMany.html
Category.hasMany(Product,  {foreignKey: 'category_id'});

// Products belongsToMany Tags (through ProductTag) - https://sequelize.org/v5/class/lib/associations/belongs-to-many.js~BelongsToMany.html
Product.belongsToMany(Tag, {through: ProductTag, foreignKey: 'product_id'});

// Tags belongsToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: ProductTag, foreignKey: 'tag_id'});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
