//import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({ message: "Backend is working" });
};
export const updateUser = async (req, res, next) => {
  console.log(req.user);
};
