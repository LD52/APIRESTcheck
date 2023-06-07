import mongoose from 'mongoose';
//définition du schéma Mongoose
const UserSchema = new mongoose.Schema({
    name : { type : 'string', required: true},
    age : { type : 'number'},
    TeamName : {type : 'string'}
})
const User= mongoose.model('user', UserSchema);

export default User