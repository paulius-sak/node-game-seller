import { v4 as uuidv4 } from "uuid";
import GameModel from "../models/game.js";

const ADD_GAME = async (req, res) => {
  try {
    const game = new GameModel({
      gameId: uuidv4(),
      ...req.body
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

const GET_ALL_USER_GAMES = async (req, res) => {
  try {
    const games = await GameModel.find({ userId: req.body.userId });

    if (!games.length) {
      return res
        .status(404)
        .json({ message: `this user does not have any games` });
    }

    return res.json({ games: games });
  } catch (err) {
    console.log("handled error: ", err);
    return res.status(500).json({ message: "error happened" });
  }
};

const DELETE_GAME_BY_ID = async (req, res) => {
  try {
    const game = await GameModel.findOne({ gameId: req.params.gameId });

    if(game.userId !== req.body.userId) {
      return res
        .status(401)
        .json({ message: `this game does not belong to you` });
    }


    const response = await GameModel.deleteOne({ gameId: req.params.gameId });

    return res.json({ response: response });
  } catch (err) {
    console.log("handled error: ", err);
    return res.status(500).json({ message: "error happened" });
  }
};

export { ADD_GAME, GET_ALL_GAMES, GET_GAME_BY_ID, GET_ALL_USER_GAMES, DELETE_GAME_BY_ID };
