import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user) {
      const { name, email, image } = user;

      const isAllowedToSignIn = true;

      if (isAllowedToSignIn) {
        return true;
      }

      return "/unauthorized";
    },
  },

  // A database is optional, but required to persist accounts in a database
  database: process.env.MONGODB_URI,
});
