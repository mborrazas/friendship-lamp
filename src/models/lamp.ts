import { Schema, model } from "mongoose";
import { Lamp } from "../interfaces/lamp.interface";

const Lampschema = new Schema<Lamp>(
    {
        code: {
            type: String,
            required: true,
            unique: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
        created_at: {
            type: Date,
            default: Date.now
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const LampModel = model("lamp", Lampschema);
export default LampModel;