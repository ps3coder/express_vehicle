import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};
export const login = async (credentials) => {
  const user = await User.findOne({ email: credentials.email });
  if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
    throw new Error("Invalid credentials");
  }
  const token = jwt.sign(
    { userId: user._id },
    "0FGSKJYIl/0oJv3wdsAyuN/AjKk2fhi5WRCsryvcgYY=",
    {
      expiresIn: "1h",
    }
  );
};
