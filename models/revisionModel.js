import mongoose from "mongoose";

const RevisionSchema = new mongoose.Schema({
  cre_dt: {
    type: Date,
    require: true,
  },
  alarm_dt: {
    type: Date,
    require: true,
  },
  interval: {
    type: Number,
    require: true,
  },
});

const Revision = mongoose.model("Revision", TopicSchema);

export default Revision;