const express=require('express');

const bookingRouter=express.Router();
const planModel = require("../models/planModel");
const userModel = require("../models/userModel");

const {protectRoute}=require('../controller/authController');
const {createSession}=require('../controller/bookingController');
bookingRouter.post('/createSession',protectRoute,createSession);
bookingRouter.get('/createSession',function(req,res){
    res.sendFile("/Users/manishsingh/Desktop/backend/booking.html");
});
// bookingRouter.get('/createSession',function(req,res){
 
//  });

module.exports=bookingRouter;