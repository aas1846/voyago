const fetch = require("node-fetch"); 

exports.geocodeLocation = async (req, res) => {
    if (!req.body) return res.status(400).json({ error: "Name is required" });
    const { name } = req.body;

    // Safely encodes string to put in a URL, replacing prohibited chars (spaces, ?, &, etc.) with percent-encoded equivalents (e.g. '%20' representing a space)
    const encoded = encodeURIComponent(name); 
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encoded}.json?access_token=${process.env.MAPBOX_API_KEY}&limit=1`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        console.log("Mapbox response:", data);
        if (data.features && data.features.length > 0 && data.features[0].center.length === 2) {
            const [lng, lat] = data.features[0].center;
            res.json({ lat: lat, lng: lng, place: name });
          } else {
            console.warn(`No coordinates found for: ${name}`);
            res.json({ lat: null, lng: null, place: name });
          }
    } catch (err) {
        console.error("Mapbox error:", err.message);
        res.status(500).json({ error: "Geocoding failed" });
    }
};