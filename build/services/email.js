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
exports.listEmail = exports.createEmail = void 0;
const email_1 = __importDefault(require("../models/email"));
const createEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const group = new email_1.default({ email: email });
    yield group.save();
    return group;
});
exports.createEmail = createEmail;
const listEmail = () => __awaiter(void 0, void 0, void 0, function* () {
    const email = yield email_1.default.find();
    return email;
});
exports.listEmail = listEmail;
