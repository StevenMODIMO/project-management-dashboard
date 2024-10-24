import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import Project from "@/models/Project";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

await dbConnect();

// Get all projects based on the authenticated user.
export async function GET() {
  return NextResponse.json({ message: "Unexpected error occurred." });
}

// Create a new project
export async function POST(req) {
  const body = req.formData()
  const projectName = body.get("projectName")
  const projectImage = body.get("projectImage")
  try {
    let imageUrl = "";

  if (projectImage && projectImage instanceof Blob) {
    const imageName = uuidv4() + path.extname(projectImage.name);
    const uploadPath = path.join(process.cwd(), "public", "uploads", imageName);

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const arrayBuffer = await projectImage.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    fs.writeFileSync(uploadPath, buffer);

    imageUrl = `/uploads/${imageName}`;
  }
    const body = await req.json();
    const title = await body.title;
    const project = await Project.create({ projectName: title });
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}