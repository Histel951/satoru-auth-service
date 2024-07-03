import { Document, Types } from "mongoose";
import { IPlayer } from "./IPlayer";
import { ITeam } from "./ITeam";

export interface ITeamInvite extends Document {
    _id: Types.ObjectId;
    team_id: Types.ObjectId | ITeam;
    role: 1 | 2 | 3 | 4 | 5;
    player_id: Types.ObjectId | IPlayer;
}
