import { Request, Response } from "express";
import { createGroup, listGroup, deleteGroup, getGroup, linkPersonToGroup } from "../services/group";


const listCtrl = async ({ body, user }: any, res: Response) => {
    const { id } = user;
    const listResponse = await listGroup(id);
    res.send(listResponse);
};

const createCtrl = async ({ body, user }: any, res: Response) => {
    const { id } = user;
    const { name, lamp } = body;
    const createResponse = await createGroup(id, name, lamp);
    res.send(createResponse);
}

const getCtrl = async ({ body, user }: any, res: Response) => {
    const { id } = user;
    const { idGroup } = body;
    const getResponse = await getGroup(idGroup, id);
    res.send(getResponse);
}

const linkPersonToGroupCtrl = async ({ body, user }: any, res: Response) => {
    const { id } = user;
    const { idGroup, idLamp } = body;
    const linkResponse = await linkPersonToGroup(idGroup, id, idLamp);
    res.send(linkResponse);
}

const deleteCtrl = async ({ body, user }: any, res: Response) => {
    const { id } = user;
    const { idGroup } = body;
    const deleteResponse = await deleteGroup(id, idGroup);
    res.send(deleteResponse);
}
 


export { listCtrl, createCtrl, getCtrl, deleteCtrl,  linkPersonToGroupCtrl }