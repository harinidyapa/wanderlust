const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { ListingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const { isLoggedin, isOwner, validateListing } = require("../middleware.js")

const listingControllers = require("../controllers/listing.js");
const multer=require('multer');
const {storage}=require("../cloudConfig.js");
const upload=multer({storage});

router.route("/")
.get( wrapAsync(listingControllers.index))
.post(
  isLoggedin,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingControllers.createListing)
);


//New Route
router.get("/new",
  isLoggedin, listingControllers.renderNewForm);
 

  router.route("/:id")
  .put(
    isLoggedin,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingControllers.updateListing))
    .delete(
      isLoggedin,
      isOwner,
      wrapAsync(listingControllers.destroyListing))
      .get(
        isLoggedin, wrapAsync(listingControllers.showListing));


//Edit Route
router.get("/:id/edit",
  isLoggedin,
  isOwner,
  wrapAsync(listingControllers.renderEditForm));

module.exports = router;