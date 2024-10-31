import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (user) => {
  jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
};

export const verifyToken = (token) => {
  jwt.verify(token, JWT_SECRET);
};
