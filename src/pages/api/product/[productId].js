import connectDB from "@/utils/connectDB";

import Product from "@/models/Product";
import Review from "@/models/Review";

export default async (req, res) => {
  try {
    await connectDB();

    const { productId } = req.query;
    const product = await Product.findOne({ _id: productId });

    // NOTE populate이 안됨... exec 붙여도 안됨.
    if (product.reviews.length > 0) {
      const populatedProduct = await product.populate("reviews");

      console.log("👌👌👌👌👌👌👌", populatedProduct);

      return res.json({
        result: true,
        data: populatedProduct,
      });
    }

    return res.json({
      result: false,
      data: product,
    });
  } catch (err) {
    return res.json({
      result: false,
      error: err.message,
    });
  }
};
