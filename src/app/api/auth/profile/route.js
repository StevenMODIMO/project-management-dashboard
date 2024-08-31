import { NextResponse} from "next/server";
import User from "@/models/User";
import { dbConnect } from "@/lib/db";

async function handler(req) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "PUT":
      return;
    default:
      return NextResponse.json({ error: "Could not process reequest." });
  }
}

export { handler as GET, handler as PUT };
