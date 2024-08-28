import mongoose from "mongoose";

export async function dbConnect() {
  await mongoose
    .connect("mongodb://localhost:27017/pmd")
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(`Error ocurred: ${error}`));
}
