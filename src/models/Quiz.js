import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  question: String,
  example: [String],
  answer: String,
  category: {
    type: String,
    enum: [
      "plastic",
      "plastic back",
      "can",
      "glass",
      "nonsense",
    ],
  },
}, { timestamps: true });

export default mongoose.models.Quiz || mongoose.model("Quiz", quizSchema);
