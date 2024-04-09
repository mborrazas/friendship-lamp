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
exports.deleteCtrl = exports.verifyEmailCtrl = exports.loginCtrl = exports.createCtrl = void 0;
const person_1 = require("../services/person");
const createCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, name } = body;
    try {
        const responseUser = yield (0, person_1.createPerson)({ email, password, name });
        const user = yield (0, person_1.loginUser)({ email, password });
        res.send(user);
    }
    catch (e) {
        console.log(e);
        res.send("ERROR_CREATE_USER");
    }
});
exports.createCtrl = createCtrl;
const loginCtrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = body;
        const responseUser = yield (0, person_1.loginUser)({ email, password });
        res.send(responseUser);
    }
    catch (e) {
        console.log(e);
        res.send("ERROR_LOGIN");
    }
});
exports.loginCtrl = loginCtrl;
const verifyEmailCtrl = ({ query }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = query;
        const responseUser = yield (0, person_1.verifyEmail)(email);
        res.send(responseUser);
    }
    catch (e) {
        console.log(e);
        res.send("ERROR_VERIFY_EMAIL");
    }
});
exports.verifyEmailCtrl = verifyEmailCtrl;
const deleteCtrl = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = user;
    const response = yield (0, person_1.deletePerson)(id);
    res.send(response);
});
exports.deleteCtrl = deleteCtrl;
