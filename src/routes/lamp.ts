import { Router } from "express";
import { checkJwt } from "../middleware/session";
import { createCtrl, listCtrl, getCtrl, deleteCtrl, pressOn, checkNotificationCtrl } from "../controllers/lamp";
import { checkNotification } from "../services/notification";


const router = Router();

router.get("/list", checkJwt, listCtrl);
router.post("/create", checkJwt, createCtrl);
router.get("/get/:id", checkJwt, getCtrl);
router.post("/delete/:id", checkJwt, deleteCtrl);
router.post("/pressOn", checkJwt, pressOn);
router.get("/check/notification", checkJwt, checkNotificationCtrl);

export { router };