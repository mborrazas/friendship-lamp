import { Request, Response } from "express";
import { listLamps, createLamp, deleteLamp, getLamp, getLampById } from "../services/lamp";
import { listGroupWithLamp } from "../services/group";
import { createNotification, checkNotification, cleanNotifications } from "../services/notification";
import mongoose from "mongoose";

const listCtrl = async ({ body, user }: any, res: Response) => {
    const { id } = user;
    const listResponse = await listLamps(id);
    res.send(listResponse);
};

const createCtrl = async ({ body, user }: any, res: Response) => {
    const { code } = body;
    const { id } = user;
    const createLampResponse = await createLamp(id, code);
    res.send(createLampResponse);
}

const getCtrl = async ({ body, user }: any, res: Response) => {
    const { id } = user;
    const { idLamp } = body;
    const getResponse = await getLamp(idLamp, id);
    res.send(getResponse);
}



const deleteCtrl = async ({ body, user }: any, res: Response) => {
    const { id } = user;
    const { idLamp } = body;
    const deleteResponse = await deleteLamp(idLamp, id);
    res.send(deleteResponse);
}

const pressOn = async ({ body }: any, res: Response) => {
    const { idLamp } = body;
    try {
        const lamp = await getLampById(idLamp);
        if (!lamp) {
            res.status(404);
            res.send({ error: "Lamp not found" });
            return;
        }

        const groups = await listGroupWithLamp(idLamp);
        groups.forEach(group => {
            group?.lamps?.forEach(async lampGroup => {
                let idLampView = new mongoose.Types.ObjectId(idLamp);
                // @ts-ignore
                if (!lampGroup.equals(idLampView)) {
                    console.log(lampGroup);
                    const lampGroupResponse = await getLampById(lampGroup);
                    if (!lampGroupResponse) {
                        return;
                    }
                     createNotification({ lamp: lampGroupResponse?._id, color: "red", creator: lamp.owner, to: lampGroupResponse?.owner });
                }
            });
        });
        res.send({ message: "NOTIFICATION_SEND" });
    } catch (e) {
        console.log(e);
        res.send({ message: "ERROR" });
    }

}

const checkNotificationCtrl = async ({ body }: any, res: Response) => {
    const { lamp } = body;
    const notifications = await checkNotification(lamp);
    const cleanNotification = await cleanNotifications(lamp);
    res.send(notifications);
}


export { listCtrl, createCtrl, getCtrl, deleteCtrl, pressOn, checkNotificationCtrl }