import { v4 as uuidv4 } from "uuid";
import GameModel from "../models/game.js";

const ADD_GAME = async (req, res) => {
  try {
    const game = new GameModel({
      gameId: uuidv4(),
      title: req.body.title,
      price: req.body.price,
      releaseYear: req.body.releaseYear,
      gameCoverUrl: req.body.gameCoverUrl
    });

    const response = await game.save();
    return res
      .status(201)
      .json({ status: "Game was created", response: response });
  } catch (err) {
    console.log("handled error: ", err);
    return res.status(500).json({ message: "error happened" });
  }
};

const GET_ALL_GAMES = async (req, res) => {
  try {
    const games = await GameModel.find();
    
    return res.json({ games: games});
  } catch (err) {
    console.log("handled error: ", err);
    return res.status(500).json({ message: "error happened" });
  }
};


const GET_GAME_BY_ID = async (req, res) => {
  try {
    const game = await GameModel.findOne({ gameId: req.params.gameId });

    if (!game) {
      return res
        .status(404)
        .json({ message: `Game with id: ${req.params.gameId} was not found` });
    }

    return res.json({ game: game });
  } catch (err) {
    console.log("handled error: ", err);
    return res.status(500).json({ message: "error happened" });
  }
};

export { ADD_GAME, GET_ALL_GAMES, GET_GAME_BY_ID };
