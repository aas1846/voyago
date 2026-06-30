const express = require("express");
const router = express.Router();
const { geocodeLocation } = require("../controllers/geocoding");

router.post("/", geocodeLocation);

module.exports = router;


