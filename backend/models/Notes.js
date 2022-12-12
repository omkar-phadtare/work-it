const mongoose = require('mongoose');

const { Schema } = mongoose;

//user model is same as Foreign key
const noteSchema = new Schema({
 user:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'userdatas'
  },
 title :{
    type : String,
    required :true
 },
 description:{
   type : String,
   required :true,
 },
 date:{
   type:Date,
   default:Date.now
 },
 tag:{
    type:String,
 }
});

const notes = mongoose.model('notes',noteSchema);

module.exports = notes