import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import Review from "@/models/Review";
import Product from "@/models/Product";

export default async (req, res) => {
  await connectDB();

  try {
    const { email } = req.query;

    const userInfo = await User.findOne({ email });
    const populatedUser = await userInfo.populate({
      path: "reviews",
      model: "Review",
      populate: {
        path: "productId",
        model: "Product",
      },
    }).execPopulate();

    return res.json({
      result: true,
      data: populatedUser,
    });
  } catch (err) {
    return res.json({
      result: false,
      error: err.message,
    });
  }
};
