import { Auth } from "../interfaces/auth.interface";
import { Person } from "../interfaces/person.interface";
import LampModel from "../models/lamp";
import PersonModel from "../models/person"
import GroupModel from "../models/group";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const createPerson = async ({ password, name, email }: Person) => {
    console.log('llamada aaca');
    const passwordHash = await encrypt(password);
    const person = new PersonModel({ email, password: passwordHash, name });
    const response = await person.save();
    return response;
}

const getPerson = async (idUser: any) => {
    const person = await PersonModel.findById(idUser);
    return person;
}

const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await PersonModel.findOne({ email });

    if (!checkIs) return "NOT_FOUND_USER";

    const passwordHash = checkIs.password;
    const isCorrect = await verified(password, passwordHash);

    if (!isCorrect) return "PASSWORD_INCORRECT";
    const token = generateToken(checkIs.email, checkIs._id, "0");

    checkIs.password = "";
    const data = {
        token,
        user: checkIs
    };
    return data;

}

const verifyEmail = async (email: any) => {
    const checkIs = await PersonModel.findOne({ email });
    if (checkIs) return "EXIST_EMAIL";
    return "NOT_FOUND_EMAIL";
}

const deletePerson = async (id: any) => {
    const response = await PersonModel.findByIdAndDelete(id);
    const deleteGroupsAndLamps = await LampModel.deleteMany({ owner: id });
    const deleteGroups = await GroupModel.deleteMany({ owner: id });
    return response;
}

export { createPerson, getPerson, loginUser, verifyEmail, deletePerson }


