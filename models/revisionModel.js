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
  words: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Word',
  }],
});

const Revision = mongoose.model("Revision", RevisionSchema);

export default Revision;