import { Schema, model } from "mongoose";
import { Group } from "../interfaces/group.interface";

const GroupSchema = new Schema<Group>(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
        name: {
            type: String,
            required: true
        },
        lamps: [
            {
                type: Schema.Types.ObjectId,
                required: false
            }
        ],
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: "user",
                required: false
            }
        ]
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const GroupModel = model("group", GroupSchema);
export default GroupModel;