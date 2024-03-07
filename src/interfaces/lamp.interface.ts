import { Types } from "mongoose";

export interface Lamp {
    code: string
    owner: Types.ObjectId;
    created_at: Date;
}