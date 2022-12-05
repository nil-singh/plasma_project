const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  phoneNum:{
    type:Number
  } ,
  gender:{
    type:String
  } ,
  age:{
    type:Number
  },
     
  
  bloodGroup: {
    type: String
  },
  addmittedDate:{
      type:String
  },
   
  location: {
    type: String
  },
  district:{
      type:String
  },
  pinCode:{
      type:String
  },
  anySuggestion:{
    type:String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
