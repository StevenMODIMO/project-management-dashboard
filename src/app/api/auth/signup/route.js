import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import User from "@/models/User";
import fs from "fs";
import path from "path";

export async function POST(req) {
  const formdata = await req.formData();
  const email = formdata.get("email");
  const password = formdata.get("password");
  const image = formdata.get("image");
  await dbConnect();
  let imageUrl = "";

  // Ensure the file is a Blob and has a name
  if (image && image instanceof Blob) {
    const imageName = image.name;
    const uploadPath = path.join(process.cwd(), "public", "uploads", imageName);

    // Create 'uploads' directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Convert Blob to Buffer and save the file
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    fs.writeFileSync(uploadPath, buffer);

    imageUrl = `/uploads/${imageName}`;
  }

  try {
    const info = await User.signup(email, password, imageUrl);
    return NextResponse.json(info);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
