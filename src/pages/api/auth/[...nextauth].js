import NextAuth from "next-auth";
import Adapters from "next-auth/adapters";
import Providers from "next-auth/providers";

import Models from "@/core/models";

export default NextAuth({
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: Adapters.TypeORM.Adapter(
    process.env.MONGODB_URI,
    {
      models: {
        User: Models.User,
      },
    },
  ),
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
