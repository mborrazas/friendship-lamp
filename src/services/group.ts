import GroupModel from "../models/group"

const createGroup = async (idUser: any, nameGroup: any, lamp: any) => {
    const group = new GroupModel({
        owner: idUser,
        name: nameGroup,
        lamps: [lamp]
    });
    await group.save();
    return group;
}

const getGroup = async (idGroup: any, idUser: any) => {
    const group = await GroupModel.findOne({ _id: idGroup, owner: idUser });
    return group;
}

const getGroupByName = async (name: any) => {
    const group = await GroupModel.findOne({ name });
    return group;
}

const listGroup = async (idUser: any) => {
    const groups = await GroupModel.find({ owner: idUser });
    return groups;
}

const deleteGroup = async (owner: any, id: any) => {
    const group = await GroupModel.findOneAndDelete({ owner, _id: id });
    return group;
}

const listGroupWithLamp = async (idLamp: any) => {
    const groups = await GroupModel.find({ lamps: idLamp });
    return groups;
}

const linkPersonToGroup = async (idGroup: any, idUser: any, idLamp: any) => {
    const group = await GroupModel.findOne({ _id: idGroup });
    if (!group) {
        return null;
    }
    group?.users?.push(idUser);
    group?.lamps?.push(idLamp);
    await group.save();
    return group;
}

export { createGroup, getGroup, deleteGroup, linkPersonToGroup, listGroup, listGroupWithLamp, getGroupByName }