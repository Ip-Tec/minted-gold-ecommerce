import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
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
    email: "goodmood@mood.com",
    username: "God Ip",
    adminrole: "God",
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
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      profile(profile) {
        return { role: profile.role ?? "client", id: profile.sub };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      if (token.error && token.error.message) {
        return null;
      }

      if (isNewUser) {
        // Check if the new user's email is in the admin database
        try {
          const adminData = await prisma.user.findUnique({
            where: {
              email: user.email, // Assuming the email is present in the user object
            },
          });

          // if (adminData) {
          //   // If the new user's email is in the admin database, add admin role
          //   user.adminrole = "Admin"; // Modify as needed
          // }
        } catch (error) {
          console.error("error.message", error.message);
          return error.message;
        }
      }

      if (user) {
        return { ...token, ...user };
      }
      // console.log("134: token.token", token);
      return { ...token, user, token };
    },
    async session(session, token, user) {
      // Extract user information from the nested structure
      const { name, email, id, username, adminrole } =
        user || token?.token?.user || {};
      session.user.role = user.role;
      // console.log("150:", { name, email, id, username, adminrole });
      if (token) {
        session.accessToken = token?.token?.accessToken;
        const { name, email, id, username, adminrole } =
          session.token.token.token.user;
        return {
          ...session,
          user: {
            id,
            name,
            email,
            username,
            adminrole,
          },
        };
      }

      return {
        session,
        token,
        user: {
          id,
          name,
          email,
          username,
          adminrole,
        },
      };
    },
  },
};
