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
    type: String,
    default: null,
  }
});

const User = mongoose.model("User", UserSchema);

export default User;