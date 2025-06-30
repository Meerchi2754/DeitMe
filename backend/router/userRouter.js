import express from "express"
import {UserReg,login,logoutUser,getUserData} from "../controller/userController.js"
import { isUserAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/user/register",UserReg);
router.post("/login",login);
router.get("/logout",logoutUser);
router.get("/UserData",isUserAuthenticated,getUserData);

export default router;