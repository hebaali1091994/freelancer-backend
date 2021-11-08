const mongoose = require("mongoose");
const ProjectSchema = mongoose.Schema({
  project_name: { type: String ,required:true,minLength:10},
  duration: { type: Date },
  budget: { type: Number },
  description:{type:String,required:true,minLength:30},
  state:{type:String}
});
module.exports = mongoose.models("project", ProjectSchema);
