const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        // required: [true, 'email required']
    },
    hashPwd: { 
        type: String, 
        // required: [true, 'password required']
    }
});
const User = mongoose.model('user', userSchema);

const settingsUserSchema = new mongoose.Schema({
    pseudo: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
    }

});
const Settings = mongoose.model('settingsUser', settingsUserSchema);

// name: { 
    // type: String, 
    // unique: true,
// },


module.exports = User, Settings;