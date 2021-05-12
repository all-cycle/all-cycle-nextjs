import mongoose from "mongoose";
import Adapters from "next-auth/adapters";

export default class User extends Adapters.TypeORM.Models.User.model {
  // eslint-disable-next-line no-useless-constructor
  constructor(name, email, image, emailVerified) {
    super(name, email, image, emailVerified);
  }
}

export const UserSchema = {
  // NOTE: name: "user"였던 부분을 extends해서 복사해주었다 소용없네..
  // ...Adapters.TypeORM.Models.User.schema,
  name: "User",
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    history: [String],
    recycleScore: {
      type: Number,
      default: 0,
    },
  },
};
