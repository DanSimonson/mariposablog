import express from "express";
import {
  test,
  updateUser,
  signoutUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/veriyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);
router.post("/signout", signoutUser);

export default router;
