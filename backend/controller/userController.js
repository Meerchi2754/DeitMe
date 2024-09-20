// import { isJWT } from "validator";
import {catchAsyncError} from "../middlewares/catchAsyncError.js"
import ErrorHandler from "../middlewares/errorMiddlewares.js"
import { User } from "../models/userSchema.js";
import {generateToken} from "../utils/jwtTokens.js"
import {calculateTDEE} from "../utils/todeeCalculator.js"

export const UserReg=catchAsyncError(async(req,res,next)=>{
    try {
    const {
            username,
            age,
            gender,
            weight,
            height,
            dp,
            activitylevel,
            hg,
            role,
            email,
            password,
            bmi
        }= req.body;
        if(
            !username,
            !age,
            !gender,
            !weight,
            !height,
            !dp,
            !activitylevel,
            !hg,
            !role,
            !email,
            !password,
            !bmi 
        ){
            return next(new ErrorHandler("Please Fill the form",400));
        }
        let user = await User.findOne({email});
        if(user){
            return next(new ErrorHandler("User already exist",400));
        }
        user = await User.create({
            username,
            age,
            gender,
            weight,
            height,
            dp,
            activitylevel,
            hg,
            role,
            email,
            password,
            bmi
        }); 
        generateToken(user,"User Registered!!",200,res);  
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error' });
      }      
});

export const getUserTDEE = (req, res) => {
    const { weight, height, age, gender, activityLevel } = req.body;
  
    const TDEE = calculateTDEE(weight, height, age, gender, activityLevel);
    
    return res.json({
      success: true,
      TDEE,
    });
  };

export const login=catchAsyncError(async(req,res,next)=>{
    const {
        email,
        password,
        role
        }=req.body;
    if(!email||!password||!role){
        return next(new ErrorHandler("Please Provide all Details!!",400));
    }
    const user= await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid Password Or Email",400));
    }
    const isPasswordMatched=await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Password",400));
    }
    if(role!==user.role){
        return next(new ErrorHandler("User with This role is not found!",400));
    }
    generateToken(user,"Login Successfull!!User Registered!!",200,res);
});