mongoose = require('mongoose');
Schema = mongoose.Schema;
//var configDB = require('../config/db.js');
//mongoose.connect(configDB.url);
UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name field is required']
    },
    rank: {
        type: String
    },
available:{type:Boolean,default:false}
});
const User=mongoose.model("User",UserSchema);
module.exports=User;