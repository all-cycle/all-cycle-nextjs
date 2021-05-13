import connectDB from "@/utils/connectDB";

import Product from "@/models/Product";

export default async (req, res) => {
  await connectDB();

  try {
    const productList = await Product.find({});

    res.json({
      result: true,
      productList,
    });
  } catch (err) {
    res.json({
      result: false,
      error: err.message,
    });
  }
};
