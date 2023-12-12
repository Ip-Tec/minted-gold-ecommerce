// page/api/auth/[...nextauth].js

import NextAuth, { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

// Get access to the site without registar
export const adminBackDoorEmails = [
  "peter@gmail.com",
  "GodIp@godmood.com",
  "adminIt@adminIT.co",
  "otakhorpeter@gmail.com",
  "peterotakhor@gmail.com",
  "peterotakhor2018@gmail.com",
];

export default NextAuth(authOptions);

export async function isAdminRequest(req, res) {
  try {
    const session = await getServerSession(authOptions, res, req);

    console.log({ session });
    if (!session?.user) {
      console.error("isAdminRequest: No user in session.");
      return res.status(401).json({ error: "User not authorized" });
    }

    // Continue with other logic for admin requests
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("isAdminRequest error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
