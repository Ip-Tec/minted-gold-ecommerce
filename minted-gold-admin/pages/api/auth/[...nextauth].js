// next-auth.js

import NextAuth, { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient();

const adminEmails = [
  "peter@gmail.com",
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
        email: { label: "Email", type: "email" },
      },
      async authorize(credentials, req) {
        // Add your logic for handling the credentials here
        // For example, validate the username and password against your database
        // Get data from DB using prisma client
        console.log({ credentials }, { req });
        const adminData = await prisma.admin.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (adminData && credentials?.email === adminData.email) {
          const admin = {
            id: adminData.id?.toString() || "", // Convert number to string
            username: adminData.username,
            email: adminData.email,
            // Include other properties as needed
          };

          return admin;
        } else {
          return adminData;
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: async ({ session, token, admin }) => {
      try {
        console.log({ session }, { admin }, { token });
        // if (adminEmails.includes(session?.user?.email)) {
        //   return session;
        // } else {
          return session;
        // }
      } catch (error) {
        console.error("Error in session callback:", error);
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
