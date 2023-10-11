const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ingredientSchema = new Schema(
  {
    name: {
      type: String,
      reqired: true,
    },
    qty: {
      type: Number,
      reqired: true,
    },
    measure: {
      type: String,
    },
    recipe: {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
      required: true,
    },
  }, {
    timestamps: true,
  }
)

const stepSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  recipe: {
    type: Schema.Types.ObjectId,
    ref: "Recipe",
    required: true,
  },
}, {
  timestamps: true,
})



const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  prepTime: {
    type: Number,
    required: true,
    default: 1,
  },
  cookTime: {
    type: Number,
    required: true,
    default: 1,
  },
  difficulty: {
    type: Number,
    required: true,
    default: 1,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  img: {
    type: String,
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
}, {
  timestamps: true,
})

module.exports = mongoose.model('Recipe', recipeSchema);