const Recipe = require('../../models/recipe');

module.exports = {
  create,
  delete: deleteIngredient,
}

async function create(req,res) {
  const recipe = await Recipe.findById(req.params.id);
  recipe.ingredients.push(req.body);
  try {
    await recipe.save();
  } catch (err) {
    console.log(err);
  };
  res.json(recipe.ingredients)
}

async function deleteIngredient(req,res) {
  const recipe = await Recipe.findById(req.params.id1);
  recipe.ingredients.remove(req.params.id2);
  try {
    await recipe.save();
  } catch (err) {
    console.log(err);
  };
  res.json(recipe.ingredients)
}