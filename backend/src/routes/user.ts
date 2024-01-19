import express from "express";
import * as UserControllers from "../controllers/user";
import { requiresAuth } from "../middleware/auth";

const router = express.Router();
router.post("/signup", UserControllers.signUp);
router.get("/", requiresAuth, UserControllers.getAuthenticatedUser);

export default router; 

router.post("/login", UserControllers.login);
router.post("/logout", UserControllers.logout);