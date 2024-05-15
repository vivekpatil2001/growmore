import { Router } from "express";
const userRouter = Router();

// import methods from controllers

import { getUserDashboard, registerUser, verifyOtp } from '../controllers/user.controller.js';

import isLoggedIn from "../middleware/auth.middleware.js";

import { createPayment, paymentVerification } from "../controllers/payment.controller.js";



    // accept form data from user
    import multer from 'multer';
    const upload = multer();




        // verify and login user routes
    userRouter.route('/register').post(upload.none(), registerUser);
    userRouter.route('/verify').post(upload.none(), verifyOtp);


    
    // get info from user dashboard info routes
    userRouter.route('/dashboard').get(isLoggedIn, getUserDashboard);



        // payment routes
    userRouter.route('/payment').post(createPayment);
    userRouter.route('/paymentverification').post(paymentVerification);











   
export default userRouter;