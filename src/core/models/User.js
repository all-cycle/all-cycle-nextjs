import mongoose from "mongoose";
import Adapters from "next-auth/adapters";

export default class User extends Adapters.TypeORM.Models.User.model {
}

export const UserSchema = {
  // NOTE: name: "user"였던 부분을 extends해서 복사해주었다 소용없네..
  ...Adapters.TypeORM.Models.User.schema,
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
