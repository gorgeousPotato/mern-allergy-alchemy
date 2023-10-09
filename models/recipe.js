const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  prepTime: {
    type: Number,
    required: true,
  },
  cookTime: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  reviews: [reviewSchema],
  ingredients: [ingredientSchema],
  steps: [stepSchema],
  glutenFree: {type: Boolean},
  dairyFree: {type: Boolean},
  eggFree: {type: Boolean},
})

module.exports = mongoose.model('Recipe', recipeSchema);