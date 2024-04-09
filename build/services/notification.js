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
exports.cleanNotifications = exports.checkNotification = exports.createNotification = void 0;
const notification_1 = __importDefault(require("../models/notification"));
const mongoose_1 = __importDefault(require("mongoose"));
const createNotification = ({ lamp, color, creator, to }) => __awaiter(void 0, void 0, void 0, function* () {
    const notification = new notification_1.default({
        lamp,
        color,
        creator,
        to
    });
    yield notification.save();
    return notification;
});
exports.createNotification = createNotification;
const checkNotification = (idLamp) => __awaiter(void 0, void 0, void 0, function* () {
    var id = new mongoose_1.default.Types.ObjectId(idLamp);
    console.log(id);
    const notifications = yield notification_1.default.find({ lamp: id });
    return notifications;
});
exports.checkNotification = checkNotification;
const cleanNotifications = (idLamp) => __awaiter(void 0, void 0, void 0, function* () {
    var id = new mongoose_1.default.Types.ObjectId(idLamp);
    const notifications = yield notification_1.default.deleteMany({ lamp: id });
    return notifications;
});
exports.cleanNotifications = cleanNotifications;
