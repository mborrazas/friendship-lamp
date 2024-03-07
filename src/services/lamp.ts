import LampModel from "../models/lamp"

const createLamp = async (owner: any, code: any) => {
    const lamp = new LampModel({
        code,
        owner
    });
    await lamp.save();
    return lamp;
}

const listLamps = async (owner: any) => {
    const lamps = await LampModel.find({ owner });
    return lamps;
}

const getLamp = async (id: any, owner: any) => {
    const lamp = await LampModel.find({ _id: id, owner });
    return lamp;
}

const getLampById = async (id: any) => {   
    const lamp = await LampModel.findById(id);
    return lamp;
}


const deleteLamp = async (id: any, owner: any) => {
    /** TODO: falta removerla de los grupos */
    const lamp = await LampModel.findOneAndRemove({ _id: id, owner });
    return lamp;
}

const updateLamp = async () => {

}

export { createLamp, listLamps, getLamp, deleteLamp, updateLamp, getLampById }