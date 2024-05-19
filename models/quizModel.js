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
  des: {
    type: String,
    default: null,
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

QuizSchema.pre('save', function(next) {
  switch (this.type) {
    case 'guess':
      this.des = this.des || 'Test your vocabulary skills and have fun guessing the hidden word in this exciting quiz challenge!';
      break;
    case 'fill':
      this.des = this.des || 'Complete sentences by filling in the missing words in this fun and challenging quiz!';
      break;
    case 'compound':
      this.des = this.des || 'Challenge yourself to form compound words by combining given words in this engaging quiz!';
      break;
    case 'sound':
      this.des = this.des || 'Put your word recognition skills to the test by identifying words based on their unique sounds.';
      break;
    default:
      this.des = this.des || null;
  }
  next();
});


const Quiz = mongoose.model("Quiz", QuizSchema);

export default Quiz;