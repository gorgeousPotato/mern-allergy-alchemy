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
  console.log(req.params.id);
  const category = await Category.findOne({title: req.params.id});
  console.log(category);
  const id = category._id;
  const recipes = await Recipe.find({category: id}).exec();
  res.json(recipes);
}

