const Recipe = require('../../models/recipe');

module.exports = {
  create,
  delete: deleteStep,
}

async function create(req,res) {
  const recipe = await Recipe.findById(req.params.id);
  recipe.steps.push(req.body);
  try {
    await recipe.save();
  } catch (err) {
    console.log(err);
  };
  res.json(recipe.steps)
}

async function deleteStep(req,res) {
  const recipe = await Recipe.findById(req.params.id1);
  recipe.steps.remove(req.params.id2);
  try {
    await recipe.save();
  } catch (err) {
    console.log(err);
  };
  res.json(recipe.steps)
}