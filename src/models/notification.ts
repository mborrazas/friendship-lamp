import { Schema, model } from "mongoose";
import { Notification } from "../interfaces/notification.interface";

const NotificationSchema = new Schema<Notification>(
    {
        lamp: {
            type: Schema.Types.ObjectId,
            ref: "lamp",
            required: true
        },
        color: {
            type: String,
            required: true
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
        to: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const NotificationModel = model("notification", NotificationSchema);
export default NotificationModel;