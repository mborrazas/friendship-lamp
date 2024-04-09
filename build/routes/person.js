"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const session_1 = require("../middleware/session");
const person_1 = require("../controllers/person");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/login", person_1.loginCtrl);
router.get("/check-email", person_1.verifyEmailCtrl);
router.post("/create", person_1.createCtrl);
router.post('/deleteAccount', session_1.checkJwt, person_1.deleteCtrl);
router.get("/test", (request, res) => {
    res.send("funca!");
});
