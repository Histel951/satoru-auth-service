import mongoose from "mongoose";
import PlayerSchema from "./schemas/PlayerSchema";

export const Player = mongoose.model('Player', PlayerSchema);
