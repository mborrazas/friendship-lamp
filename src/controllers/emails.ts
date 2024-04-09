import { Request, Response } from "express";
import { createEmail, listEmail } from "../services/email";


const listCtrl = async ({ body }: any, res: Response) => {
    const listResponse = await listEmail();
    res.send(listResponse);
};

const createCtrl = async ({ body, user }: any, res: Response) => {
    const { id } = user;
    const { email } = body;
    const createResponse = await createEmail(email);
    res.send(createResponse);
}
 
 


export { listCtrl, createCtrl }