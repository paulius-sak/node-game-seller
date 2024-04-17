import express from "express";
import { SIGN_IN, LOG_IN } from "../controller/user.js";

const router = express.Router();

router.post("/users", SIGN_IN);
router.post("/users/login", LOG_IN);

export default router;
