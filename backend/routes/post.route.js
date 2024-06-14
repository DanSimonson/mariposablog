import express from "express";
import { verifyToken } from "../utils/veriyUser.js";
import {
  create,
  getposts,
  getpost,
  deletepost,
  updatepost,
} from "../controllers/post.controller.js";
const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", getposts);
router.get("/getpost/:postId", getpost);
router.delete("/deletepost/:postId/:userId", verifyToken, deletepost);
router.put("/updatepost/:postId/:userId", verifyToken, updatepost);

export default router;
