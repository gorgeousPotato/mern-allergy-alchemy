const Recipe = require('../../models/recipe');
const uploadImage = require('../../config/upload-image')

module.exports = {
  upload,
  index,
}

async function index(req,res) {
  const rec = await Recipe.findById(req.params.id);
  const img = rec.img;
  res.json(img);
}

// async function upload(req,res) {
//   const recipe = await Recipe.findById(req.params.id);
//   console.log('Received a request to upload an image');
//   console.log('req.file:', req.file); 
//   req.body.img = {
//     data: fs.readFileSync(path.join("uploads/" + req.file.filename)),
//   };
//   console.log(req.body);
//   recipe.img = req.body.img;
//   try {
//     await recipe.save();
//   } catch (err) {
//     console.log(err);
//   };
//   res.json("uploaded")
// }
async function upload(req,res) {
  try {
    if (req.file) {
      console.log(req.file);
      const imgUrl = await uploadImage(req.file);
      const recipe = await Recipe.findById(req.params.id);
      recipe.img = imgUrl;
      await recipe.save()
      res.json(recipe.img);
    } else {
      throw new Error('Must select a file');
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
}