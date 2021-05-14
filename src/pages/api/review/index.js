import connectDB from "@/utils/connectDB";

import User from "@/models";
import Product from "@/models/Product";
import Review from "@/models/Review";

export default async (req, res) => {
  const { method } = req;

  await connectDB();

  switch (method) {
    case "GET":
      // 마이페이지에서 나의 리뷰 다 가져오기
      res.status(200).json({ result: true, data: "hi" });
      break;
    case "POST": {
      const {
        email,
        productId,
        comment,
        picture,
        recycleScore,
        preferenceScore,
      } = req.body;

      const user = await User.findOne({ email }, "id").exec();

      const review = await Review.create({
        userId: user._id,
        productId,
        comment,
        picture,
        recycleScore,
        preferenceScore,
      });

      user.reviews.push(review._id);

      await Product.findOneAndUpdate({ id: productId },
        { $push: { reviewers: user._id, reviews: review._id } },
        { new: true });

      res.status(200).json({ result: true, data: review });
      break;
    }
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
