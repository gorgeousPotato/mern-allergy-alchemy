const Category = require('../../models/category');
const Recipe = require('../../models/recipe');
const User = require('../../models/user')

module.exports = {
  new: newRecipe,
  create,
  show,
  index,
  edit,
}

async function index(req, res) {
  const allRecipes = await Recipe.find({}).populate('ingredients');
  const user = await User.findById(req.user._id);
  const allergies = user.allergies;
  const allergiesArr = allergies.map(aller => aller.ingredient.toLocaleLowerCase());
  recipesArr = [];
  allRecipes.map(rec => {
    let isOkay = true;
    rec.ingredients.map(ing => {if (allergiesArr.includes(ing.name.toLowerCase())) isOkay=false} );
    if (isOkay) recipesArr.push(rec)
  })
res.json(recipesArr);
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

async function edit(req,res) {
  const recipe = await Recipe.findById(req.params.id).populate('user', 'name');
  res.json(recipe);
}