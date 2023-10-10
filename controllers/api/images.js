const Recipe = require('../../models/recipe');
const fs = require("fs");
const path = require("path");

module.exports = {
  create,
}

async function create(req,res) {
  const recipe = await Recipe.findById(req.params.id);
  console.log('Received a request to upload an image');
  console.log('req.file:', req.file); 
  req.body.img = {
    data: fs.readFileSync(path.join("uploads/" + req.file.filename)),
  };
  console.log(req.body);
  recipe.img = req.body.img;
  try {
    await recipe.save();
  } catch (err) {
    console.log(err);
  };
  res.json("uploaded")
}