import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";
import { User } from "../models/userSchema.js";
import { generateToken } from "../utils/jwtTokens.js";
import { calculateTDEE } from "../utils/todeeCalculator.js";

// User Registration
export const UserReg = catchAsyncError(async (req, res, next) => {
    const {
        username, age, gender, weight, height, dp, activitylevel, hg,
        role, email, password, bmi
    } = req.body;

    if (
        !username || !age || !gender || !weight || !height || !dp ||
        !activitylevel || !hg || !role || !email || !password || !bmi
    ) {
        return next(new ErrorHandler("Please fill out the form", 400));
    }

    let user = await User.findOne({ email });
    if (user) {
        return next(new ErrorHandler("User already exists", 400));
    }

    user = await User.create({
        username, age, gender, weight, height, dp, activitylevel, hg,
        role, email, password, bmi
    });

    generateToken(user, "User Registered!!", 200, res);
});

// TDEE Calculation
export const getUserTDEE = (req, res) => {
    const { weight, height, age, gender, activityLevel } = req.body;
    const TDEE = calculateTDEE(weight, height, age, gender, activityLevel);
    return res.json({ success: true, TDEE });
};

// User Login
export const login = catchAsyncError(async (req, res, next) => {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
        return next(new ErrorHandler("Please provide all details!", 400));
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 400));
    }

    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid password", 400));
    }

    if (role !== user.role) {
        return next(new ErrorHandler("User with this role is not found!", 400));
    }

    generateToken(user, "Login Successful!", 201, res);
});

// User Logout
export const logoutUser = catchAsyncError(async (req, res) => {
    res
        .status(200)
        .cookie("userToken", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            expires: new Date(0),
            path: "/",
        })
        .json({ success: true, message: "Logout Successful!" });
});

// Get User Data
export const getUserData = catchAsyncError(async (req, res, next) => {
    console.log("Reached getUserData route");

    if (!req.user) {
        console.log("User not authenticated");
        return next(new ErrorHandler("User not authenticated", 401));
    }

    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
        console.log("User not found in database");
        return next(new ErrorHandler("User not found", 404));
    }

    console.log("User found:", user);
    res.status(200).json({
        success: true,
        message: "User data retrieved successfully",
        user,
    });
});