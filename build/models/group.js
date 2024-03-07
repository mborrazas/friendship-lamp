"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GroupSchema = new mongoose_1.Schema({
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lamps: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "lamp",
            required: false
        }
    ],
    users: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "user",
            required: false
        }
    ]
}, {
    versionKey: false,
    timestamps: true
});
const GroupModel = (0, mongoose_1.model)("group", GroupSchema);
exports.default = GroupModel;
