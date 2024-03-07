"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroupByName = exports.listGroupWithLamp = exports.listGroup = exports.linkPersonToGroup = exports.deleteGroup = exports.getGroup = exports.createGroup = void 0;
const group_1 = __importDefault(require("../models/group"));
const createGroup = (idUser, nameGroup, lamp) => __awaiter(void 0, void 0, void 0, function* () {
    const group = new group_1.default({
        owner: idUser,
        name: nameGroup,
        lamps: [lamp]
    });
    yield group.save();
    return group;
});
exports.createGroup = createGroup;
const getGroup = (idGroup, idUser) => __awaiter(void 0, void 0, void 0, function* () {
    const group = yield group_1.default.findOne({ _id: idGroup, owner: idUser });
    return group;
});
exports.getGroup = getGroup;
const getGroupByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const group = yield group_1.default.findOne({ name });
    return group;
});
exports.getGroupByName = getGroupByName;
const listGroup = (idUser) => __awaiter(void 0, void 0, void 0, function* () {
    const groups = yield group_1.default.find({ owner: idUser });
    return groups;
});
exports.listGroup = listGroup;
const deleteGroup = (owner, id) => __awaiter(void 0, void 0, void 0, function* () {
    const group = yield group_1.default.findOneAndDelete({ owner, _id: id });
    return group;
});
exports.deleteGroup = deleteGroup;
const listGroupWithLamp = (idLamp) => __awaiter(void 0, void 0, void 0, function* () {
    const groups = yield group_1.default.find({ lamps: idLamp });
    return groups;
});
exports.listGroupWithLamp = listGroupWithLamp;
const linkPersonToGroup = (idGroup, idUser, idLamp) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const group = yield group_1.default.findOne({ _id: idGroup });
    if (!group) {
        return null;
    }
    (_a = group === null || group === void 0 ? void 0 : group.users) === null || _a === void 0 ? void 0 : _a.push(idUser);
    (_b = group === null || group === void 0 ? void 0 : group.lamps) === null || _b === void 0 ? void 0 : _b.push(idLamp);
    yield group.save();
    return group;
});
exports.linkPersonToGroup = linkPersonToGroup;
