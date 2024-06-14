
export const test = (req, res) => {
  res.json({ message: "Backend is working" });
};
export const updateUser = async (req, res, next) => {
  console.log(req.user);
};
export const signoutUser = (req, res, next) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json("You have been signed out");
  } catch (error) {
    next(error);
  }
};
