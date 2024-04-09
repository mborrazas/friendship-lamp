import { Schema, model } from "mongoose";
import { Email } from "../interfaces/email.interface";

const EmailSchema = new Schema<Email>(
    {
        email: {
            type: String,
            required: true
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const EmailModel = model("email", EmailSchema);
export default EmailModel;