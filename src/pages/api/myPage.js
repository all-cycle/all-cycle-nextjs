import { getSession } from "next-auth/client";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";

export default async (req, res) => {
  try {
    const session = await getSession({ req });
    console.log("???", session);

    if (!session) {
      return res.json({
        result: false,
        error: "로그인을 하세요!",
      });
    }

    await connectDB();

    const userInfo = await User.findOne({ email: session.user.email });
    console.log(userInfo);

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
