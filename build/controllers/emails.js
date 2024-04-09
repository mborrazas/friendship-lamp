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
exports.createCtrl = exports.listCtrl = void 0;
const email_1 = require("../services/email");
const listCtrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listResponse = yield (0, email_1.listEmail)();
    res.send(listResponse);
});
exports.listCtrl = listCtrl;
const createCtrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = body;
    const createResponse = yield (0, email_1.createEmail)(email);
    res.send(createResponse);
});
exports.createCtrl = createCtrl;
