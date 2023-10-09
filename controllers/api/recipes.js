const Category = require('../../models/category');
const Recipe = require('../../models/recipe');

module.exports = {
  new: newRecipe,
  create,
  // createIngredient,
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

// async function createIngredient(req,res) {
//   console.log(req.body);
//   const recipe = await Recipe.findById(req.params.id);
//   recipe.ingredients.push(req.body)
//   try {
//     await recipe.save();
//   } catch (err) {
//     console.log(err);
//   };
//   res.json(recipe.ingredients)
// }