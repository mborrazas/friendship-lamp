import EmailModel from "../models/email"

const createEmail = async (email: any) => {

    const existingGroup = await EmailModel.findOne({ email: email });

    if (existingGroup) {
        return;
    }

    const group = new EmailModel({ email: email });
    await group.save();

    return group; 
}

const listEmail = async () => {
    const email = await EmailModel.find();
    return email;
}


export { createEmail, listEmail }