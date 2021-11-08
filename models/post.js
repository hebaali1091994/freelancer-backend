const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
  post_name: { type: String ,required:true,minLength:10},
  budget: { type: Number },
  description:{type:String,required:true,minLength:30},
  state:{type:String},
  comment:{type:String}
});
module.exports = mongoose.models("post", PostSchema);