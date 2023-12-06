// next-auth.js

import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import NextAuth, { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";

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
      timeout: 15000,
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
      },
      async authorize(credentials, req) {
        console.log("Authorize credentials:", credentials);
        const adminData = await prisma.admin.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (adminData && credentials?.email === adminData.email) {
          console.log("User is an admin:", adminData);
          const admin = {
            id: adminData.id,
            name: adminData.name,
            email: adminData.email,
            username: adminData.username,
          };

          // Return the user data to let NextAuth.js handle the session creation
          return Promise.resolve(admin);
        } else {
          console.log("User is not an admin:", adminData);
          // Returning null indicates authentication failure
          return Promise.resolve(null);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn(user, account, profile) {
      console.log("Sign In:", user);
      return true;
    },
    async jwt(token, user) {
      console.log("JWT:", token);
      console.log("User:", user);
      return token;
    },
    async session(session, token) {
      console.log("Session:", session);
      // session.user = {
      //   id: token.id,
      //   name: token.name,
      //   email: token.email,
      //   username: token.username,
      //   // Add other properties as needed
      // };
      return session;
    },
  },
};

export default NextAuth(authOptions);

export async function isAdminRequest(req, res) {
  try {
    const session = await getServerSession(req, res, authOptions);
    console.log("isAdminRequest session:", session);

    // Uncomment the following lines if you want to restrict access to admins
    if (!adminEmails.includes(session?.user?.email)) {
      res.status(401).end();
      throw new Error("User not authorized");
    }

    return session;
    // Continue with other logic for admin requests
  } catch (error) {
    console.error("isAdminRequest error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
