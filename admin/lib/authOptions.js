import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

export const adminBackDoorEmails = [
  "peter@gmail.com",
  "GodIp@godmood.com",
  "adminIt@adminIT.co",
  "otakhorpeter@gmail.com",
  "peterotakhor@gmail.com",
  "peterotakhor2018@gmail.com",
];

export const adminBackDoorEmailsData = {
  user: {
    id: 0,
    name: "God",
    email: "",
    username: "God Ip",
    adminrole: "God",
    role: "God Own",
  },
};

let adminInfo = null;

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      timeout: 15000,
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {},
      profile(profile) {
        return {
          id: profile.sub, // Use 'sub' as the user ID
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.role || "Admin",
          emailVerified: profile.email_verified,
        };
      },
    }),
  ],
  callbacks: {
    async signIn(user) {
      if (user.account.provider === "google") {
        const { email } = user;
        // Check if the user is in the admin list
        if (adminBackDoorEmails.includes(email) || email) {
          // If the user is an admin, add them to the admin table
          await prisma.admin.create({
            data: { ...user },
          });
        }
      }
      return true;
    },
    async session(session, user) {
      // console.log("session-Session.user", session.user);
      return session;
    },
    async jwt(token, user) {
      console.log("user-Token", user);
      console.log("token-Token", token);
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  database: process.env.DATABASE_URL,
};
