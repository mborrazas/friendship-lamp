import { Types } from "mongoose";
import { Lamp } from "./lamp.interface";

export interface Group {
    owner: Types.ObjectId;
    users: Types.ObjectId[] | null;
    lamps: Lamp[] | null;
    name: string;
}

