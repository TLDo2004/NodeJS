import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    enum: [ 'guess', 'fill', 'compound', 'sound'],
    default: 'guess',
    require: true,
  },
  point: {
    type: Number,
    require: true,
  },
  timer: {
    type: Number,
    require: true,
  },
  words: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Word',
  }],
});

const Quiz = mongoose.model("Quiz", QuizSchema);

export default Quiz;