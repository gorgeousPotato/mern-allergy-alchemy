const Recipe = require('../../models/recipe');

module.exports = {
  create,
  delete: deleteStep,
  update,
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

async function update(req,res) {
  const recipe = await Recipe.findById(req.params.id1);
  Recipe.updateOne(
    {_id: req.params.id1, 'steps._id': req.params.id2},
    {$set: {'steps.$.name': req.body.name}},
    res.json(recipe.steps)
  )
}