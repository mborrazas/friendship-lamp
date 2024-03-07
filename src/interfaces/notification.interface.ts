import { Types } from "mongoose";

export interface Notification {
    lamp: Types.ObjectId;
    color: string;
    creator: Types.ObjectId;
    to: Types.ObjectId;
}