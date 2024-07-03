import mongoose from "mongoose";
import TeamSchema from "./schemas/TeamSchema";
import PlayerSchema from "./schemas/PlayerSchema";
import TournamentSchema from "./schemas/TournamentSchema";
import TeamInviteSchema from "./schemas/TeamInviteSchema";
import TournamentTeamsSchema from "./schemas/TournamentTeamsSchema";

export const Team = mongoose.model('Team', TeamSchema);
export const Player = mongoose.model('Player', PlayerSchema);
export const TeamInvite = mongoose.model('TeamInvite', TeamInviteSchema);
export const Tournament = mongoose.model('Tournament', TournamentSchema);
export const TournamentTeams = mongoose.model('TournamentTeams', TournamentTeamsSchema);
