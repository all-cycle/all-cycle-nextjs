import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  recycleScore: {
    type: Number,
    default: 0,
  },
  preferenceScore: {
    type: Number,
    default: 0,
  },
  comment: String,
  picture: String,
});

export default mongoose.models.Review || mongoose.model("Review", reviewSchema);
