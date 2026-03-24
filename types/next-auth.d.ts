import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      userId: string;
      username: string;
      role: Role;
      token: string;
    };
  }

  interface CredentialsInputs {
    username: string;
    password: string;
  }
}
