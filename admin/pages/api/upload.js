// pages/api/upload.js

import multiparty from "multiparty";
import fs from "fs"; // Import the synchronous version of fs
import path from "path";
import { PrismaClient } from "@prisma/client";
import { isAdminRequest } from "@/pages/api/auth/[...nextauth]";

const prisma = new PrismaClient();

export default async function handle(req, res) {
  // await isAdminRequest(req, res);

  const form = new multiparty.Form();
  const { files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ files });
    });
  });

  const links = [];

  for (const file of files.file) {
    const ext = file.originalFilename.split(".").pop();
    const newFilename = Date.now() + "." + ext;
    const localFilePath = path.join(process.cwd(), "public/productImg", newFilename);

    // Save file to local directory
    await fs.promises.writeFile(
      localFilePath,
      await fs.promises.readFile(file.path)
    );

    const link = `/productImg/${newFilename}`;

    links.push(link);
  }

  return res.json({ links });
}

export const config = {
  api: { bodyParser: false },
};
