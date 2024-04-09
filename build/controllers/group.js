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
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkPersonToGroupCtrl = exports.deleteCtrl = exports.getCtrl = exports.createCtrl = exports.listCtrl = void 0;
const group_1 = require("../services/group");
const listCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = user;
    const listResponse = yield (0, group_1.listGroup)(id);
    res.send(listResponse);
});
exports.listCtrl = listCtrl;
const createCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = user;
    const { name, lamp } = body;
    const createResponse = yield (0, group_1.createGroup)(id, name, lamp);
    res.send(createResponse);
});
exports.createCtrl = createCtrl;
const getCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = user;
    const { idGroup } = body;
    const getResponse = yield (0, group_1.getGroup)(idGroup, id);
    res.send(getResponse);
});
exports.getCtrl = getCtrl;
const linkPersonToGroupCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = user;
    const { idGroup, idLamp } = body;
    const linkResponse = yield (0, group_1.linkPersonToGroup)(idGroup, id, idLamp);
    res.send(linkResponse);
});
exports.linkPersonToGroupCtrl = linkPersonToGroupCtrl;
const deleteCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = user;
    const { idGroup } = body;
    const deleteResponse = yield (0, group_1.deleteGroup)(id, idGroup);
    res.send(deleteResponse);
});
exports.deleteCtrl = deleteCtrl;
