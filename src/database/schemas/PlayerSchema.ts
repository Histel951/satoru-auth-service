import { Schema } from "mongoose";
import { IPlayer } from "@/interfaces/schemas/IPlayer";

export default new Schema<IPlayer>({
    discordId: String,
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
        default: null,
    },
    steamAccountId: String,
    name: String,
    lastMatchDate: Number,
    rank: {
        type: Number,
        default: null,
    },
    leaderboardRank: {
        type: Number,
        default: null
    },
    position: {
        type: Number,
        default: null,
    },
})
