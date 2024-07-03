import mongoose, { Document } from "mongoose";
import { ITeam } from "./ITeam";

export interface IPlayer extends Document {
    discordId: string;
    team: mongoose.Types.ObjectId | ITeam | null;
    steamAccountId: string;
    name: string;
    lastMatchDate: number | null;
    rank: number | null;
    leaderboardRank: number | null;
    position: number | null;
}
