import connectDB from "@/utils/connectDB";
import User from "@/models/User";

export default async (req, res) => {
  await connectDB();

  try {
    const { email } = req.query;

    const userInfo = await User.findOne({ email });

    return res.json({
      result: true,
      data: userInfo,
    });
  } catch (err) {
    return res.json({
      result: false,
      error: err.message,
    });
  }
};
