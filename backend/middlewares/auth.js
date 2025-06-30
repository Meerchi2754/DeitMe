import { User } from "../models/userSchema.js";
import { catchAsyncError} from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";
import jwt from "jsonwebtoken";
// import app from "../app.js"

export const isUserAuthenticated = async (req, res, next) => {
    const token = req.cookies.userToken || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return next(new ErrorHandler("Authentication token not found", 401));
    }

    try {
        const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = await User.findById(decodedData.id).select("_id");
        next();
    } catch (error) {
        return next(new ErrorHandler("Invalid or expired token", 401));
    }
};