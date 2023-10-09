const Category = require('../../models/category');

module.exports = {
  new: newRecipe,
}

async function newRecipe(req,res) {
  const categories = await Category.find({});
  res.json(categories);
}