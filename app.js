require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;
  
  const express = require("express");
  const app = express();
  const mongoose = require("mongoose");
  const Listing = require("./models/listing.js");
  const path=require("path");
  const methodOverride=require("method-override");
  const ejsMate = require("ejs-mate");
  const wrapAsync=require("./utils/wrapAsync.js");
  const ExpressError=require("./utils/ExpressError.js");
  const {ListingSchema, reviewSchema}= require("./schema.js");
  const Review=require("./models/review.js");
  // const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

  const listingRouter=require("./routes/listing.js")
  const reviewRouter=require("./routes/review.js");
  const userRouter=require("./routes/user.js");
  const session=require("express-session");
  const MongoStore=require('connect-mongo');
  const flash=require("connect-flash");
  const passport=require("passport");
  const LocalStrategy=require("passport-local");
  const User=require("./models/user.js");


  // const dbUrl=process.env.ATLASDB_URL;
  // main() 
  // .then(()=>{
  //   console.log("Connected to DB");
  // })
  // .catch((err)=>{
  //   console.log(err)
  // });
  //  async function main() {
  //   await mongoose.connect(MONGO_URL);
  //  }
  mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Connection error", err));


  app.set("view engine","ejs");
  app.set("views",path.join(__dirname,"views"));
  app.use(express.urlencoded({extended:true}));
  app.use(methodOverride("_method"));
  app.engine("ejs",ejsMate);
  app.use(express.static(path.join(__dirname,"/public")));
  
  
const store=MongoStore.create({
  mongoUrl:MONGO_URL,
  crypto:{
    secret:process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error",()=>{
  console.log("Error in session store",err);
})

  const sessionOptions= {
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
      expires: Date.now() * 7 * 24 * 60 * 60 *1000,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly:true
    }
  }

  app.use(session(sessionOptions));
  app.use(flash());

  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));

  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());


  // app.get("/", (req, res) => {
  //   res.send("Hi, I am root");
  // });

// app.get("/demouser",async(req,res)=>{
//   let fakeuser=new User({
//     email:"student@gmail.com",
//     username:"delta-student"
//   });
//   let registeredUser= await User.register(fakeuser,"helloworld");
//   res.send(registeredUser);
// })

  app.use((req,res,next)=>{
    res.locals.successMsg=req.flash("success");
    res.locals.errorMsg=req.flash("error");
    res.locals.currUser=req.user;
    next();
  })
app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);

  app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page not Found!!!!!"));
  });

  app.use((err,req,res,next)=>{
    let {statusCode=500,message="Something went wrong!"}=err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("listings/error.ejs",{message});
  });

  app.listen(8080, () => {
    console.log("server is listening to port 8080");
  });