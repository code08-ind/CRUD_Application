import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

// Added the schema for the Database with attributes defined below
const userSchema = mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone:String
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');

// Model is created out and it will be exported to be used in other files
const user = mongoose.model('user', userSchema);

export default user;
