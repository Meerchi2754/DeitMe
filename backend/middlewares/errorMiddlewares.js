class ErrorHandler extends Error{
    constructor(message, statuscode){
        super(message);
        this.statuscode=statuscode;
    }
}

export const errorMiddleware=(err,req,res,next)=>{
    err.message=err.message || "Internal Server Error";
    err.statuscode=err.statuscode || 500;
    if(err.code === 11000){
        const message= `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message,400);
    }
    if(err.name === "JsonWebTokenError") {
        const message = "Json Web Token is invalid, Try Again!";
        err = new ErrorHandler(message,400);
    }
    if(err.name === "TokenExpiredError") {
        const message = "Json Web Token is Expired, Try Again!";
        err = new ErrorHandler(message,400);
    }
    if(err.name === "CastError") {
        const message = `Invalid ${err.path}`;
        err = new ErrorHandler(message,400);
    }

        const errorMessage = err.errors
         ? Object.values(err.errors)
         .map((error)=> err.message)
         .join("")
         : err.message;


    return res.status(err.statuscode).json({
        success: false,
        message: errorMessage,
    });
};
// app.use(express.json());
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Allow your frontend's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials if necessary
    optionsSuccessStatus: 204
  };
//   app.use(cors(corsOptions)); 
export default ErrorHandler;