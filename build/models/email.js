"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EmailSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true
    },
}, {
    versionKey: false,
    timestamps: true
});
const EmailModel = (0, mongoose_1.model)("email", EmailSchema);
exports.default = EmailModel;
