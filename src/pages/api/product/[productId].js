import connectDB from "@/utils/connectDB";

import Product from "@/models/Product";

export default async (req, res) => {
  await connectDB();

  const { productId } = req.query;

  try {
    const product = await Product.findById(productId);

    res.json({
      result: true,
      product,
    });
  } catch (err) {
    res.json({
      result: false,
      error: err.message,
    });
  }
};
