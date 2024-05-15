import jwt from "jsonwebtoken";
import {ApiError} from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";


const isLoggedIn = asyncHandler(async(req, res, next) => {
    try {
        
        
        // const token = req.headers.cookie.split(' ')[1] || req.headers.authorization.split(' ')[1];

        const token = req.cookies;
            
        if (!token) {
            throw new ApiError(400, 'No token found in cookie');
        }
    
        
        if (typeof token !== 'string') {
            throw new ApiError(400, 'Invalid token format');
        }
    
        console.log("imported token \n",token);
        console.log("environment token \n",process.env.JWT_SECRET);


        const userdetail =  jwt.verify(token, process.env.JWT_SECRET);

        console.log("user detail",userdetail);

      

        req.user = userdetail ;
        next();

    } 
    catch (error) {
      console.log(error);
      console.log(error.message);
  
      return res
        .status(401)
        .json({
            status: error,
            error: error.message
        });
    }
  
});

export default isLoggedIn;