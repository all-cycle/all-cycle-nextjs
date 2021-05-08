// import { useRouter } from "next/router";
import connectDB from "@/middleware/mongodb";
import User from "@/models/User";

// 회원가입
// 로그인
// 로그아웃
const handler = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
    });

    res.status(200).json({ result: "ok", data: newUser });
  } catch (err) {
    res.status(400).json({ result: "error", error: err.message });
  }
};

export default connectDB(handler);
