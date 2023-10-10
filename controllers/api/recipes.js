const Category = require('../../models/category');
const Recipe = require('../../models/recipe');

module.exports = {
  new: newRecipe,
  create,
  show,
}

async function newRecipe(req,res) {
  const categories = await Category.find({});
  res.json(categories);
}

async function create(req,res) {
  req.body.glutenFree = !!req.body.glutenFree;
  req.body.dairyFree = !!req.body.dairyFree;
  req.body.eggFree = !!req.body.eggFree;
  const recipe = await Recipe.create(req.body);
  res.json(recipe);
}

async function show(req,res) {
  const recipe = await Recipe.findById(req.params.id).populate('user', 'name');
  res.json(recipe);
}