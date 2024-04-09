import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  pass: {
    type: String,
    default: null,
  },
  bio: {
    type: String,
    default: null,                                  
  },
  avatar: {
    type: String,
    default: null,
  },
  birth: {
    type: Date,
    default: null,
  },
  words: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Word',
  }],
  topics: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Word',
  }],
  quizzes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Word',
  }],
  revisions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Word',
  }],

});

const User = mongoose.model("User", UserSchema);

export default User;