const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      trim: true
   },
   email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /.+\@.+\..+/
   },
   phone: {
      type: String,
      required: true,
      unique: true,
      match: /^[0-9]{10}$/
   },
   password: {
      type: String,
      required: true,
      minlength: 6
   },
   upiId: {
      type: String,
      unique: true,
      sparse: true
   },
   balance: {
      type: Number,
      default: 0,
      min: 0
   },
   mpin: {
      type: String,
      required: true,
      minlength: 4
   }
 



}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;