const User = require('../../models/user');

module.exports = {
  create,
  index,
}

async function create(req,res) {
  const user = await User.findById(req.user._id);
  if (req.body.length) req.body.map(ing => user.items.push(ing))
  try {
    await user.save();
  } catch (err) {
    console.log(err);
  };
  res.json(user.items)
}

async function index(req,res) {
  const user = await User.findById(req.user._id);
  const items = user.items;
  res.json(items);
}
  