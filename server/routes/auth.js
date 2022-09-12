import express from "express";
import { signin, signup, googleAuth } from "../controllers/auth.js";

const router = express.Router();

//Create a user
router.post("/signup", signup);

//sign in
router.post("/signin", signin);

//google auth
router.post("/google", googleAuth);

export default router;
