import { User } from "../models/userSchema.js";
import { catchAsyncError} from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";
import jwt from "jsonwebtoken";
import app from "../app.js"
// export const isAdminAuthenticated = catchAsyncErrors(async(req,res,next)=>{
//     const token = req.cookies.adminToken;
//     if(!token){
//         return next(new ErrorHandler("Admin Not Authenticated!", 400));
//     }
//     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//     req.user = await User.findById(decoded.id);
//     if(req.user.role !== "Admin"){
//         return next(
//             new ErrorHandler(
//                 `${req.user.role} not authorized for this resources!`,
//             403
//             )
//         );
//     }
//     next();
// });
// app.use(express.json());
export  const  isUserAuthenticated = catchAsyncError(async(req,res,next)=>{
    const token = req.cookies.patientToken;
    if(!token){
        return next(new ErrorHandler("User Not Authenticated!", 400));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if(req.user.role !== "user"){
        return next(
            new ErrorHandler(
                `${req.user.role} not authorized for this resources!`,
            403
            )
        );
    }
    next();
});