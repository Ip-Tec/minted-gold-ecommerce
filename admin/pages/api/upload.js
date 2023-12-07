// pages/api/upload.js

import multiparty from 'multiparty';
import fs from 'fs/promises';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { isAdminRequest } from '@/pages/api/auth/[...nextauth]';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  await isAdminRequest(req, res);

  const form = new multiparty.Form();
  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });

  const links = [];

  for (const file of files.file) {
    const ext = file.originalFilename.split('.').pop();
    const newFilename = Date.now() + '.' + ext;
    const localFilePath = path.join(process.cwd(), 'productImg', newFilename);

    // Save file to local directory
    await fs.writeFile(localFilePath, fs.readFileSync(file.path));

    const link = `/p-Img/${newFilename}`;
    links.push(link);
  }

  return res.json({ links });
}

export const config = {
  api: { bodyParser: false },
};
