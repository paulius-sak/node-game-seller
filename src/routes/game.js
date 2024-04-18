import express from "express";
import { ADD_GAME, GET_ALL_GAMES, GET_GAME_BY_ID, GET_ALL_USER_GAMES, DELETE_GAME_BY_ID } from "../controller/game.js";
import {auth} from "../middlewares/auth.js"
import validation from "../middlewares/validation.js"
import gameSchema from "../validationSchema/game.js";

const router = express.Router();

router.post("/games", auth, validation(gameSchema), ADD_GAME);
router.get("/games", GET_ALL_GAMES)
router.get("/games/user", auth,  GET_ALL_USER_GAMES)
router.get("/games/:gameId", GET_GAME_BY_ID)
router.delete("/games/:gameId", auth, DELETE_GAME_BY_ID)

export default router;
