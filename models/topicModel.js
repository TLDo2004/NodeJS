import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  des: {
    type: String,
    default: null,
  },
  prog: {
    type: Number,
    default: null,
  },
  words: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Word',
  }],
});

const Topic = mongoose.model("Topic", TopicSchema);

export default Topic;