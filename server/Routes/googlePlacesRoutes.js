const express = require("express");
const router = express.Router();
const { fetchPlace } = require("../controllers/googlePlacesController");

// POST /api/google/place
router.post("/place", fetchPlace);

module.exports = router;