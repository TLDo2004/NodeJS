import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  des: {
    type: String,
    require: true,
  },
  prog: {
    type: String,
    require: true,
  },
});

const Topic = mongoose.model("Topic", TopicSchema);

export default Topic;