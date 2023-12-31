const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const allergySchema = new Schema({
  ingredient: {type: String},
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
})

const itemSchema = new Schema({
  item: {type: String},
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
})

const userSchema = new Schema({
name: {type: String, required: true},
email: {
  type: String,
  unique: true,
  lowercase: true,
  required: true,
},
password: {
  type: String,
  trim: true,
  minLength: 3,
  required: true,
},
allergies: [allergySchema],
items: [itemSchema], 
}, {
  timestamps: true,
  // Even though it's hashed - don't serialize the password
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
}
);

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password,SALT_ROUNDS);
  return next();
})

module.exports = mongoose.model('User', userSchema);