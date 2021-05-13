import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  brand: String,
  name: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  imgAlt: {
    type: String,
    required: true,
  },
  searchCount: {
    type: Number,
    default: 0,
  },
  recycleType: {
    type: String,
    enum: ["plastic", "glass", "etc"],
    default: "etc",
  },
  productType: {
    type: String,
    enum: ["ion", "soft", "juice", "water", "coffee", "etc"],
    default: "etc",
  },
  recycleScoreAvg: {
    type: Number,
    default: 0,
  },
  preferenceScoreAvg: {
    type: Number,
    default: 0,
  },
  reviewers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

export default mongoose.models.Product || mongoose.model("Product", productSchema);
