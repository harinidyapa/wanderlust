const express=require("express");
const router=express.Router({mergeParams:true}); 
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const { reviewSchema}= require("../schema.js");
const Listing = require("../models/listing.js");
const Review=require("../models/review.js");
const {validateReview, isLoggedin, isAuthor}=require("../middleware.js")

const reviewControllers=require("../controllers/reviews.js")


//Reviews
  //Post
  router.post("/" ,
    isLoggedin,
    validateReview,
    wrapAsync(reviewControllers.createReview));

//Delete
router.delete("/:reviewId",
  isLoggedin,
  isAuthor,
  wrapAsync(reviewControllers.destroyReview));


module.exports=router;