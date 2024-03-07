import { Router, Request, Response } from "express";
import { checkJwt } from "../middleware/session";
import { createCtrl, loginCtrl, verifyEmailCtrl, deleteCtrl } from "../controllers/person";


const router = Router();



router.post("/login", loginCtrl);
router.get("/check-email", verifyEmailCtrl);
router.post("/create", createCtrl);
router.post('/deleteAccount', checkJwt, deleteCtrl)

router.get("/test", (request: Request, res: Response) => {
    res.send("funca!");
});



export { router };