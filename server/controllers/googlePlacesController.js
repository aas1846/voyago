const fetch = require("node-fetch"); // if needed
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

async function fetchPlace(req, res) {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Missing place name" });

    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
      name
    )}&inputtype=textquery&fields=name,geometry&key=${GOOGLE_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.candidates && data.candidates.length > 0) {
      const { lat, lng } = data.candidates[0].geometry.location;
      const officialName = data.candidates[0].name;
      return res.json({ lat, lng, name: officialName });
    }

    res.status(404).json({ error: "Place not found" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { fetchPlace };