import { Document } from "mongoose";

export interface ITournament extends Document {
    name: string
    description: string
    imageUrl: string
    teamCount: number
    prizePull: number
    entryFee: number
    maxRank: number
}
