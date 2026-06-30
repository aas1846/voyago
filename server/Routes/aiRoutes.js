const express = require("express");
const router = express.Router();
const { getAISuggestions, getDetailedItinerary } = require("../controllers/aiController");

router.get("/locations", getAISuggestions);

router.post("/itinerary", getDetailedItinerary);

module.exports = router;