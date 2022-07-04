const express=require("express");
const { get } = require("lodash");
const app = express();
var cors=require('cors');
app.use(cors());

app.use(express.static('public/build'));


const cookieParser=require('cookie-parser'); 
app.use(express.json()); //global middleware 

const port=process.env.PORT || 4000;
app.listen(port,function(){
    console.log(`server listening on port ${port}`); 
});





app.use(cookieParser());

// let users=[
//     {
//         'id':1,
//         'name':"dsm f"
//     },
//     {
//         'id':2,
//         'name':"dsmfk"

//     },
//     {
//         'id':3,
//         'name':"dnfndkf"
//     }
// ];

const userRouter=require('./Routers/userRouter');
const planRouter=require('./Routers/planRouter');
const reviewRouter=require('./Routers/reviewRouter');
const bookingRouter=require('./Routers/bookingRouter')

app.use("/user",userRouter);

app.use("/plans",planRouter);

app.use("/review",reviewRouter);

app.use("/booking",bookingRouter);



// app.use("/auth",authRouter);
const planModel=require('./models/planModel');








// app.get('/user',(req,res)=>{
//     console.log(req.query);

//     res.send(users);

// })
// app.post('/user',(req,res)=>{
//     console.log(req.body);
//     users=req.body;

//     res.json({
//         message:"data recieved sucessfully",
//         user:req.body
//     });

    
// });

// app.patch('/user',(req,res)=>{
//     console.log('req.body->',req.body);
//     //update data in user objxt
//     let dataTobeUpdated=req.body;

//     for(key in req.body)
//     {
//         users[key]=dataTobeUpdated[key];

//     }
//     res.json({
//         message:"data updated sucessfully"
//     })

// })


// app.delete('/user',(req,res)=>{
//     users={};
//     res.json({
//         message:"data has been deleted"
//     })
// })
// app.get('/user/:username',(req,res)=>{
//     console.log(req.params.username);
//     console.log(req.params);

//     res.send("user id id recienced");
   

// })










