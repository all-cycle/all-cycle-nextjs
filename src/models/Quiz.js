import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  question: String,
  examples: [String],
  answer: String,
  description: String,
  category: {
    type: String,
    enum: [
      "plastic",
      "plastic back",
      "can",
      "paper",
      "glass",
      "nonsense",
      "common sense",
    ],
  },
}, { timestamps: true });

export default mongoose.models.Quiz || mongoose.model("Quiz", quizSchema);
