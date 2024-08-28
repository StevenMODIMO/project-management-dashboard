import { Schema, model, models } from "mongoose";
import { hash, genSalt, compare } from "bcrypt";
import { isEmail, isStrongPassword } from "validator";


const userSchema = new Schema({
  email: String,
  password: String,
  imageUrl: String,
});

userSchema.statics.signup = async function (email, password, imageUrl) {
  if (!email || !password) {
    throw Error("All fields must be filled.");
  }

  if (!isEmail(email)) {
    throw Error("Invalid email address.");
  }

  if (!isStrongPassword(password)) {
    throw Error("Weak password.");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use.");
  }

  const salt = await genSalt(10);
  const hashed = await hash(password, salt);

  const user = await this.create({ email, password: hashed, imageUrl });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled.");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email.");
  }

  const match = await compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password.");
  }

  return user;
};

export default models.User || model("User", userSchema);
