import mongoose from "mongoose";

const WordSchema = new mongoose.Schema({
  word: {
    type: String,
    require: true,
  },
  pos: {
    type: String,
    require: true,
  },
  def: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    default: null,
  },
  audio: {
    type: String,
    default: null,
  },
  pronoun: {
    type: String,
    default: null,
  },
  hint: {
    type: String,
    default: null,
  },
});

const Word = mongoose.model("Word", WordSchema);

export default Word;