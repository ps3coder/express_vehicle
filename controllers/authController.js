import db from "../config/db.js";
import { generateToken } from "../config/auth.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const [results] = await db.execute("INSERT INTO users SET ?", {
      username,
      email,
      password,
    });
    res.send({
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).send({ message: "Error registering user" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const [results] = await db.execute(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );
    if (!results.length)
      return res.status(401).send({ message: "Invalid credentials" });
    const user = results[0];
    const token = generateToken(user);
    res.send({ message: "Logged in successfully", token });
  } catch (error) {
    res.status(500).send({
      message: "Error logging in",
    });
  }
};
