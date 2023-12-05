// next-auth.js

import NextAuth, { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient();

const adminEmails = [
  "otakhorpeter@gmail.com",
  "peterotakhor@gmail.com",
  "peterotakhor2018@gmail.com",
];

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      timeout: 900000,
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign-in form (e.g., 'Sign in with...')
      credentials: {
        email: { label: "Email", type: "text" },
        username: { label: "Username", type: "text" },
        // password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        // Validate email and password against your database
        const admin = await prisma.admin.findFirst({
          where: {
            email: credentials.email,
            username: credentials.username,
          },
        });

        if (admin) {
          return Promise.resolve(admin);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: async ({ session, token, admin }) => {
      console.log({ session }, { admin }, { token });
      if (adminEmails.includes(session?.user?.email)) {
        return session;
      } else {
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);

export async function isAdminRequest(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!adminEmails.includes(session?.user?.email)) {
    res.status(401);
    res.end();
    throw "not an admin";
  }
}
