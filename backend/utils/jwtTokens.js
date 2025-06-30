    // export const generateToken=(user,message,statusCode, res)=>{
    //     const token=user.generateJsonWebToken();
    //     const cookieName=user.role==="Admin"?"adminToken":"userToken";
    //     res.status(statusCode).cookie(cookieName,token,{
    //         expires: new Date(Date.now()+process.env.COOKIE_EXPIRE*24*60*60*1000)
    //     }).json({
    //         success:true,
    //         message,
    //         user,
    //         token,
    //     });
    // };
    export const generateToken = (user, message, statusCode, res) => {
        const token = user.generateJsonWebToken();
        const cookieName = "userToken";  
        res.status(statusCode).cookie(cookieName, token, {
            expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000), // Cookie expiry time
            httpOnly: false, // Make it accessible only by web server (more secure)
            secure: false,// Set secure in production only
            // sameSite: 'Lax', // Helps mitigate CSRF attacks
        }).json({
            success: true,
            message,
            user,
            token,
        });
    };
    