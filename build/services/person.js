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
exports.deletePerson = exports.verifyEmail = exports.loginUser = exports.getPerson = exports.createPerson = void 0;
const lamp_1 = __importDefault(require("../models/lamp"));
const person_1 = __importDefault(require("../models/person"));
const group_1 = __importDefault(require("../models/group"));
const bcrypt_handle_1 = require("../utils/bcrypt.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
const createPerson = ({ password, name, email }) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('llamada aaca');
    const passwordHash = yield (0, bcrypt_handle_1.encrypt)(password);
    const person = new person_1.default({ email, password: passwordHash, name });
    const response = yield person.save();
    return response;
});
exports.createPerson = createPerson;
const getPerson = (idUser) => __awaiter(void 0, void 0, void 0, function* () {
    const person = yield person_1.default.findById(idUser);
    return person;
});
exports.getPerson = getPerson;
const loginUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const checkIs = yield person_1.default.findOne({ email });
    if (!checkIs)
        return "NOT_FOUND_USER";
    const passwordHash = checkIs.password;
    const isCorrect = yield (0, bcrypt_handle_1.verified)(password, passwordHash);
    if (!isCorrect)
        return "PASSWORD_INCORRECT";
    const token = (0, jwt_handle_1.generateToken)(checkIs.email, checkIs._id, "0");
    checkIs.password = "";
    const data = {
        token,
        user: checkIs
    };
    return data;
});
exports.loginUser = loginUser;
const verifyEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const checkIs = yield person_1.default.findOne({ email });
    if (checkIs)
        return "EXIST_EMAIL";
    return "NOT_FOUND_EMAIL";
});
exports.verifyEmail = verifyEmail;
const deletePerson = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield person_1.default.findByIdAndDelete(id);
    const deleteGroupsAndLamps = yield lamp_1.default.deleteMany({ owner: id });
    const deleteGroups = yield group_1.default.deleteMany({ owner: id });
    return response;
});
exports.deletePerson = deletePerson;
