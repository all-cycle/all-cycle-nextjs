// import { useRouter } from "next/router";
import connectDB from "../../middleware/mongodb";
import User from "../../models/User";

const handler = async (req, res) => {
  console.log("body", req.body.name);

  try {
    const newUser = await User.create({
      name: req.body.name,
    });

    console.log(newUser, "----------");

    res.status(200).json({ result: "ok", data: newUser });
  } catch (err) {
    res.status(400).json({ result: "error", error: err.message });
  }
};

export default connectDB(handler);
