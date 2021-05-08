import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  reviewId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
  },
  history: [String],
  recycleScore: {
    type: Number,
    default: 0,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
