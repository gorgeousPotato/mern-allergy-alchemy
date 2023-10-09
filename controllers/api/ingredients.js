const Recipe = require('../../models/recipe');

module.exports = {
  create,
}

async function create(req,res) {
  console.log(req.body);
  const recipe = await Recipe.findById(req.params.id);
  recipe.ingredients.push(req.body);
  try {
    await recipe.save();
  } catch (err) {
    console.log(err);
  };
  res.json(recipe.ingredients)
}