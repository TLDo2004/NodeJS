import mongoose from "mongoose";

const RevisionSchema = new mongoose.Schema({
  cre_dt: {
    type: Date,
    default: Date.now(),
    require: true,
  },
  alarm_dt: {
    type: Date,
    default: () => {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 3); // Add 3 days to the current date
      return currentDate;
    },
    require: true,
  },
  interval: {
    type: Number,
    default: null,
  },
  words: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Word',
  }],
});

const Revision = mongoose.model("Revision", RevisionSchema);

export default Revision;