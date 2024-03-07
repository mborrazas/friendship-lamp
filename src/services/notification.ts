import { Notification } from "../interfaces/notification.interface";
import NotificationModel from "../models/notification"
import mongoose from "mongoose";
const createNotification = async ({ lamp, color, creator, to }: Notification) => {
    const notification = new NotificationModel({
        lamp,
        color,
        creator,
        to
    });
    await notification.save();
    return notification;
}


const checkNotification = async (idLamp: string) => {
    var id = new mongoose.Types.ObjectId(idLamp);
    console.log(id);
    const notifications = await NotificationModel.find({ lamp: id });
    return notifications;
}

const cleanNotifications = async (idLamp: string) => {
    var id = new mongoose.Types.ObjectId(idLamp);
    const notifications = await NotificationModel.deleteMany({ lamp: id });
    return notifications;
}

export { createNotification, checkNotification, cleanNotifications }


