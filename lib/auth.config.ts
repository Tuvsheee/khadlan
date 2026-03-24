import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { api } from "./api";

const authConfig: NextAuthOptions = {
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialProvider({
      credentials: {
        username: {
          type: "text",
        },
        password: {
          type: "password",
        },
      },
      async authorize(credentials) {
        try {
          const response = await api.post("/auth/login", {
            username: credentials?.username,
            password: credentials?.password,
          });

          // Check if the response indicates a successful authentication
          if (response.data.success) {
            const { token, user } = response.data.data;
            return {
              ...user,
              token,
            };
          } else {
            // Throw an error with the backend's error message
            throw new Error(response.data.message);
          }
        } catch (error: any) {
          // Handle network errors or backend errors
          throw new Error(
            error.response?.data?.message ||
              error.message ||
              "Authentication failed"
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },

  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        return {
          ...token,
          userId: user.userId,
          token: user.token,
          username: user.username,
          role: user.role,
        };
      }
      return token;
    },
    async session({ session, token }: any) {
      return {
        ...session,
        user: {
          ...session.user,
          userId: token.userId,
          token: token.token,
          username: token.username,
          role: token.role,
        },
      };
    },
  },
  session: {
    maxAge: 60 * 60 * 24, // 1 day
  },
} satisfies NextAuthOptions;

export default authConfig;
