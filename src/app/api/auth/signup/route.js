import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import User from "@/models/User";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export async function POST(req) {
  const formdata = await req.formData();
  const email = formdata.get("email");
  const password = formdata.get("password");
  const image = formdata.get("image");
  await dbConnect();
  let imageUrl = "";

  if (image && image instanceof Blob) {
    const imageName = uuidv4() + path.extname(image.name);
    const uploadPath = path.join(process.cwd(), "public", "uploads", imageName);

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
