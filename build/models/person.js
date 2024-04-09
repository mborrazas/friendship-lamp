"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Personschema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});
const PersonModel = (0, mongoose_1.model)("person", Personschema);
exports.default = PersonModel;
