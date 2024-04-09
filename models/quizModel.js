import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema({
  type: {
    type: String,
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