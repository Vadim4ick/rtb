import express from "express";
import { authUser } from "../controllers/user/authController.js";
import { registerUser } from "../controllers/user/reqController.js";
import { getUserProfile } from "../controllers/user/userProfile.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/profile").get(protect, getUserProfile);
router.route("/login").post(authUser);
router.route("/").post(registerUser);

export default router;
