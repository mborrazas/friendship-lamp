"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const emails_1 = require("../controllers/emails");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/list", emails_1.listCtrl);
router.post("/create", emails_1.createCtrl);
