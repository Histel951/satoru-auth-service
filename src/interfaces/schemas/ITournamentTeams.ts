import { Document, Types } from "mongoose";
import { ITournament } from "./ITournament";
import { ITeam } from "./ITeam";

export interface ITournamentTeams extends Document {
    tournament: Types.ObjectId | ITournament;
    team: Types.ObjectId | ITeam;
}
