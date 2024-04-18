import mongoose from "mongoose";

const gameSchema = mongoose.Schema({
    gameId: {type: String, required: true},
    userId: {type: String, required: true},
    title: { type: String, required: true},
    price: { type: Number, required: true },
    releaseYear: { type: Number, required: true},
    gameCoverUrl: { type: String, required: true },
  });
  
  export default mongoose.model("Game", gameSchema);
  