"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const NotificationSchema = new mongoose_1.Schema({
    lamp: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "lamp",
        required: true
    },
    color: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    to: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});
const NotificationModel = (0, mongoose_1.model)("notification", NotificationSchema);
exports.default = NotificationModel;
