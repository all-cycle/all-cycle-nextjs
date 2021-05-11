import NextAuth from "next-auth";
import Adapters from "next-auth/adapters";
import Providers from "next-auth/providers";

import User from "../../../core/models";
import connectDB from "../../../core/api/connectDB";

/** @type { import("next-auth/adapters").Adapter } */
export function MyAdapter(config, options = {}) {
  return {
    async getAdapter() {
      return {
        async createUser(profile) {
          console.log(profile);
          return profile;
        },
      };
    },
  };
}

export default NextAuth({
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  database: process.env.MONGODB_URI,
  // adapter: MyAdapter(
  //   process.env.MONGODB_URI,
  //   {
  //     models: {
  //       User: { model: User.model, schema: User.schema },
  //     },
  //   },
  // ),
  debug: true,
  secret: process.env.SALT,
  session: {
    jwt: true,
    maxAge: 60 * 60 * 3,
    updateAge: 60 * 60,
  },
  jwt: {
    secret: process.env.SALT,
  },
});
