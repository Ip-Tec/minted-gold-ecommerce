// pages/api/deleteImage.js

import fs from "fs";
import path from "path";

export default async function handle(req, res) {
  const { imageLink } = req.body;

  if (!imageLink) {
    return res.status(400).json({ error: "Image link not provided" });
  }

  const imagePath = path.join(process.cwd(), "../public", imageLink);

  try {
    // Delete the file
    await fs.promises.unlink(imagePath);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error deleting file:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
