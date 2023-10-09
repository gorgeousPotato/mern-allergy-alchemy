const User = require('../../models/user');

module.exports = {
  index,
  create,
  delete: deleteAllergy,
}

async function index(req,res) {
  const user = await User.findById(req.user._id);
  const allergies = user.allergies;
  res.json(allergies);
}

async function create(req,res) {
  const user = await User.findById(req.user._id);
  req.body.user = req.user._id;
  console.log(req.body);
  user.allergies.push(req.body);
  try {
    await user.save();
  } catch(err) {
    console.log('error');
  }
  res.json(user.allergies);
}

async function deleteAllergy(req,res) {
  const user = await User.findOne({
    "allergies._id": req.params.id,
    "allergies.user": req.user._id,
  });
  user.allergies.remove(req.params.id);
  await user.save();
  res.json(user.allergies);
}