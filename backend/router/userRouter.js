import express from "express"
import {UserReg,login} from "../controller/userController.js"
import {isUserAuthenticated} from "../middlewares/auth.js "

const router = express.Router();

router.post("/user/register",UserReg);
router.post("/login",login);



export default router;