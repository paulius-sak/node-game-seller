import express from "express";
import { ADD_GAME, GET_ALL_GAMES, GET_GAME_BY_ID } from "../controller/game.js";
import {auth} from "../middlewares/auth.js"

const router = express.Router();

router.post("/games", auth, ADD_GAME);
router.get("/games", GET_ALL_GAMES)
router.get("/games/:gameId", GET_GAME_BY_ID)

export default router;
