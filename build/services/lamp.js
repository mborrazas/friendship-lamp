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
exports.getLampById = exports.updateLamp = exports.deleteLamp = exports.getLamp = exports.listLamps = exports.createLamp = void 0;
const lamp_1 = __importDefault(require("../models/lamp"));
const createLamp = (owner, code) => __awaiter(void 0, void 0, void 0, function* () {
    const lamp = new lamp_1.default({
        code,
        owner
    });
    yield lamp.save();
    return lamp;
});
exports.createLamp = createLamp;
const listLamps = (owner) => __awaiter(void 0, void 0, void 0, function* () {
    const lamps = yield lamp_1.default.find({ owner });
    return lamps;
});
exports.listLamps = listLamps;
const getLamp = (id, owner) => __awaiter(void 0, void 0, void 0, function* () {
    const lamp = yield lamp_1.default.find({ _id: id, owner });
    return lamp;
});
exports.getLamp = getLamp;
const getLampById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const lamp = yield lamp_1.default.findById(id);
    return lamp;
});
exports.getLampById = getLampById;
const deleteLamp = (id, owner) => __awaiter(void 0, void 0, void 0, function* () {
    /** TODO: falta removerla de los grupos */
    const lamp = yield lamp_1.default.findOneAndRemove({ _id: id, owner });
    return lamp;
});
exports.deleteLamp = deleteLamp;
const updateLamp = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.updateLamp = updateLamp;
