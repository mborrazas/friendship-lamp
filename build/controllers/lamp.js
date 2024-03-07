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
exports.checkNotificationCtrl = exports.pressOn = exports.deleteCtrl = exports.getCtrl = exports.createCtrl = exports.listCtrl = void 0;
const lamp_1 = require("../services/lamp");
const group_1 = require("../services/group");
const notification_1 = require("../services/notification");
const listCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = user;
    const listResponse = yield (0, lamp_1.listLamps)(id);
    res.send(listResponse);
});
exports.listCtrl = listCtrl;
const createCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = body;
    const { id } = user;
    const createLampResponse = yield (0, lamp_1.createLamp)(id, code);
    res.send(createLampResponse);
});
exports.createCtrl = createCtrl;
const getCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = user;
    const { idLamp } = body;
    const getResponse = yield (0, lamp_1.getLamp)(idLamp, id);
    res.send(getResponse);
});
exports.getCtrl = getCtrl;
const deleteCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = user;
    const { idLamp } = body;
    const deleteResponse = yield (0, lamp_1.deleteLamp)(idLamp, id);
    res.send(deleteResponse);
});
exports.deleteCtrl = deleteCtrl;
const pressOn = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idLamp } = body;
    try {
        const lamp = yield (0, lamp_1.getLampById)(idLamp);
        if (!lamp) {
            res.status(404);
            res.send({ error: "Lamp not found" });
            return;
        }
        const groups = yield (0, group_1.listGroupWithLamp)(idLamp);
        groups.forEach(group => {
            var _a;
            (_a = group === null || group === void 0 ? void 0 : group.lamps) === null || _a === void 0 ? void 0 : _a.forEach((lampGroup) => __awaiter(void 0, void 0, void 0, function* () {
                const lampGroupResponse = yield (0, lamp_1.getLampById)(lampGroup);
                if (!lampGroupResponse) {
                    return;
                }
                (0, notification_1.createNotification)({ lamp: lampGroupResponse === null || lampGroupResponse === void 0 ? void 0 : lampGroupResponse._id, color: "red", creator: lamp.owner, to: lampGroupResponse === null || lampGroupResponse === void 0 ? void 0 : lampGroupResponse.owner });
            }));
        });
        res.send({ message: "NOTIFICATION_SEND" });
    }
    catch (e) {
        console.log(e);
        res.send({ message: "ERROR" });
    }
});
exports.pressOn = pressOn;
const checkNotificationCtrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { lamp } = body;
    const notifications = yield (0, notification_1.checkNotification)(lamp);
    const cleanNotification = yield (0, notification_1.cleanNotifications)(lamp);
    res.send(notifications);
});
exports.checkNotificationCtrl = checkNotificationCtrl;
