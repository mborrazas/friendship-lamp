import EmailModel from "../models/email"

const createEmail = async (email: any) => {
    const group = new EmailModel({email: email});
    await group.save();
    return group;
}
 
const listEmail = async () => {
    const email = await EmailModel.find();
    return email;
}
 

export { createEmail, listEmail }