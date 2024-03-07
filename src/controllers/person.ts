import { Request, Response } from "express";
import { createPerson, loginUser, verifyEmail, deletePerson } from "../services/person";


const createCtrl = async ({ body, user }: any, res: Response) => {
    const { email, password, name } = body;
    try {
        const responseUser = await createPerson({ email, password, name });
        const user = await loginUser({ email, password });
        res.send(user);
    } catch (e) {
        console.log(e);
        res.send("ERROR_CREATE_USER");
    }
};


const loginCtrl = async ({ body }: Request, res: Response) => {
    try {
        const { email, password } = body;
        const responseUser = await loginUser({ email, password });
        res.send(responseUser);
    } catch (e) {
        console.log(e);
        res.send("ERROR_LOGIN");
    }

};


const verifyEmailCtrl = async ({ query }: Request, res: Response) => {
    try {
        const { email } = query;
        const responseUser = await verifyEmail(email);
        res.send(responseUser);
    } catch (e) {
        console.log(e);
        res.send("ERROR_VERIFY_EMAIL");
    }
}

const deleteCtrl = async ({ body, user }: any, res: Response) => {
    const { id } = user;
    const response = await deletePerson(id);
    res.send(response);
}

export { createCtrl, loginCtrl, verifyEmailCtrl, deleteCtrl }