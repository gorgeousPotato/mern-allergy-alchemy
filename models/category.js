const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  }
})

// categorySchema.methods.getAll = async function() {
//   const categories = await this.find({});
//   return categories;
// }

module.exports = mongoose.model('Category', categorySchema);