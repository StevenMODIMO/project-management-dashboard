import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import { dbConnect } from "./db";

export const authOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        await dbConnect();
        const user = await User.login(email, password);
        if (user) {
          return {
            id: user.id,
            email: user.email,
            image: user.imageUrl,
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          image: user.imageUrl,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          imageUrl: token.imageUrl,
        },
      };
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};
