const mongoose = require('mongoose');



const settingsUserSchema = new mongoose.Schema({
    pseudo: {
        type: String,
        unique: true,
    },
    stg: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});
const Settings = mongoose.model('settingsUser', settingsUserSchema);


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    hashPwd: { 
        type: String, 
        // required: [true, 'password required']
    },
    ofCourse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Settings,
    }
});

const User = mongoose.model('user', userSchema);

Settings.schema.path('stg').options.ref = User;



// name: { 
    // type: String, 
    // required: [true, 'email required']
    // },
    
module.exports = {
    User: User, 
    Settings: Settings,
}; 