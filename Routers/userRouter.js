const express=require("express");
const userRouter=express.Router();
const multer=require('multer');


// const protectRoute=require('./authHelper');


const{signup,login,isAuthorised,protectRoute,forgetpassword,resetpassword,logout}=require('../controller/authController');


const {
    getUser,getAllUser,updateUser,deleteUser,updateProfileImage
}=require('../controller/userController');
const { get } = require("lodash");




// userRouter
// .route("/")
// .get(protectRoute,getUsers)
// .post(postUser)
// .patch(updateUser)
// .delete(deleteUser)


// userRouter
// .route("/:id")
// .get(getUserById);


// userRouter
// .route("/getCookies")
// .get(getCookies);


// userRouter
// .route("/setCookies")
// .get(setCookies);

//user ke option 
userRouter.route('/:id')
.patch(updateUser)
.delete(deleteUser)


userRouter
.route('/signup')
.post(signup)

userRouter
.route('/login')
.post(login)

userRouter
.route('/forgetpassword')
.post(forgetpassword)

userRouter
.route('/resetpassword/:token')
.post(resetpassword)



	//multer for fileupload

// upload-> storage , filter
const multerStorage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/images')
    },
    filename:function(req,file,cb){
        cb(null,`user-${Date.now()}.jpeg`)
    }
});


const filter = function (req, file, cb) {
    if (file.mimetype.startsWith("image")) {
      cb(null, true)
    } else {
      cb(new Error("Not an Image! Please upload an image"), false)
    }
  }

const upload = multer({
    storage: multerStorage,
    fileFilter: filter
  });


  userRouter.post("/ProfileImage", upload.single('photo') ,updateProfileImage);
  //get request
  userRouter.get('/ProfileImage',(req,res)=>{
      res.sendFile("/Users/manishsingh/Desktop/BACKEND/foodApp/multer.html");
  });


//profile page

userRouter.use(protectRoute);
userRouter
.route('/userProfile')
.get(getUser)



userRouter.use(isAuthorised(['admin']));
userRouter
.route('/')
.get(getAllUser)



userRouter
.route('/logout')
.get(logout)



module.exports=userRouter;
