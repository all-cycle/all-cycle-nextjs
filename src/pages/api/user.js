import connectDB from "@/core/api/connectDB";
import User from "@/core/models/User";

// 회원가입
// 로그인
// 로그아웃
const handler = async (req, res) => {
  const db = await connectDB();

  try {
    // db.collection("users", (err, usersCollection) => usersCollection
    //   .find({})
    //   .toArray((err, users) => {
    //     res.status(200).json(users);
    //   }));
    res.status(200).json({ result: "ok" });
  } catch (err) {
    res.status(400).json({ result: "error", error: err.message });
  }
};

export default connectDB(handler);
