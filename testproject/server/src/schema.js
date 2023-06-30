const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, unique: true,},
    hashPwd: { type: String, }
  
  });
  const User = mongoose.model('user', userSchema);

module.exports = User;