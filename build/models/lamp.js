"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Lampschema = new mongoose_1.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
}, {
    versionKey: false,
    timestamps: true
});
const LampModel = (0, mongoose_1.model)("lamp", Lampschema);
exports.default = LampModel;
