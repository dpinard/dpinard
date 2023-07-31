const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    hashPwd: { 
        type: String, 
        // required: [true, 'password required']
    },
    ofCourse: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Settings',
    }],
    ofCourse1: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'setGroup',
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'friendsRef',
    }]
});
const User = mongoose.model('User', userSchema);


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
const Settings = mongoose.model('Settings', settingsUserSchema);


const setGroupSchema = new mongoose.Schema({
    pseudoArray: Array,
    confirmed: Boolean,
    rel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})
const setGroup = mongoose.model('setGroup', setGroupSchema);


const friendSchema = new mongoose.Schema({
    friendsArray: Array,
    rel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})
const Friends = mongoose.model('Friends', friendSchema);



User.schema.path('ofCourse').options.ref = Settings;
User.schema.path('friends').options.ref = Friends;
Settings.schema.path('stg').options.ref = User;
setGroup.schema.path('rel').options.ref = User;



// name: { 
    // type: String, 
    // required: [true, 'email required']
    // },
    
module.exports = {
    User: User, 
    Friends: Friends, 
    Settings: Settings,
    setGroup: setGroup,
}; 


/*
    relation user->settings
    relation user->friends [followings, followers]
    relation user->bets [my bet, follower bet] 


*/