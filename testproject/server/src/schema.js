const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        unique: true,
        index: true
    },
    hashPwd: { 
        type: String, 
    }
  
  });
  const User = mongoose.model('user', userSchema);

module.exports = User;