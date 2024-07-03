import { Document, Types } from "mongoose";

export interface ITeam extends Document {
    _id: Types.ObjectId;
    name: string;
    image_url: string;
    owner: {
        type: Types.ObjectId;
        ref: string;
    };
    ratingPoints: number;
}
