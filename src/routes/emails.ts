import { Router } from "express";
import { createCtrl, listCtrl } from "../controllers/emails";


const router = Router();

router.get("/list", listCtrl);
router.post("/create", createCtrl);

export { router };