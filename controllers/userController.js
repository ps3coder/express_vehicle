import userService from "../services/userService.js";

export const register = async (req, res) => {
  try {
    const user = await userService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const token = await userService.login(req.body);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.messsage });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    await userService.forgotPassword(req.body.email);
    res.json({ message: "Password recovery email sent" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
