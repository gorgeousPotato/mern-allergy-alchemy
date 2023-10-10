const Category = require('../../models/category');
const Recipe = require('../../models/recipe')

module.exports = {
  index,
  show,
}

async function index(req,res) {
  const categories = await Category.find({});
  res.json(categories);
}


async function show(req,res) {
  const recipes = await Recipe.find({category: req.params.id}).exec();
  res.json(recipes);
}

