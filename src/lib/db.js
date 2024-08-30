import mongoose from "mongoose";

export async function dbConnect() {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(`Error ocurred: ${error}`));
}
