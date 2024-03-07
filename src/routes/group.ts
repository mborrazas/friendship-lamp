import { Router } from "express";
import { checkJwt } from "../middleware/session";
import { createCtrl, listCtrl, getCtrl, deleteCtrl, linkPersonToGroupCtrl } from "../controllers/group";


const router = Router();

router.get("/list", checkJwt, listCtrl);
router.post("/create", checkJwt, createCtrl);
router.get("/get/:id", checkJwt, getCtrl);
router.post("/delete/:id", checkJwt, deleteCtrl);
router.post("/link", checkJwt, linkPersonToGroupCtrl);


export { router };