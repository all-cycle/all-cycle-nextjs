import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   reviewId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Review",
//   },
//   history: [String],
//   recycleScore: {
//     type: Number,
//     default: 0,
//   },
// });

// export default mongoose.models.User || mongoose.model("User", userSchema);
import Adapters from "next-auth/adapters";

// Extend the built-in models using class inheritance
export default class User extends Adapters.TypeORM.Models.User.model {
  // eslint-disable-next-line no-useless-constructor
  constructor(name, email, image, emailVerified) {
    super(name, email, image, emailVerified);
  }
}

export const UserSchema = {
  name: "User",
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,
    reviewId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
    history: [String],
    recycleScore: {
      type: Number,
      default: 0,
    },
  },
};
