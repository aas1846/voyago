const fetch = require("node-fetch");

exports.getAISuggestions = async (req, res) => {
  const city = req.query.city || "New York City";
  const interests = req.query.interests || "";

  const prompt = `
You are a travel agent AI. Recommend 8-12 highly-rated spots in ${city} for tourists.
${interests ? `The traveler is especially interested in: ${interests}.` : ""}
Include both popular tourist attractions and lesser-known local favorites (hidden gems).
Respond ONLY with a raw JSON array of place names as strings.
Example: ["Central Park", "Times Square"]
  `.trim();

  try {
    const ollamaResponse = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3",
        prompt,
        format: "json",
        stream: false
      })
    });

    const data = await ollamaResponse.json();
    res.json(data);
  } catch (error) {
    console.error("Ollama error:", error);
    res.status(500).json({ error: "Failed to get AI suggestions" });
  }
};

exports.getDetailedItinerary = async (req, res) => {
  const { city, time, commute, group, spots, interests } = req.body;

  if (!time || !commute || !group || !spots) {
    return res.status(400).json({ error: "missing query or invalid spots" });
  }

  const spotsList = spots.map(s => s.name).join(", ");
  const destination = city || "New York City";

  const prompt = `
You are a travel assistant AI. Create a detailed ${time}-day itinerary for ${destination}.

Traveler preferences:
- Commute style: ${commute}
- Traveling with: ${group}
${interests ? `- Interests: ${interests}` : ""}
- Must-visit spots: ${spotsList}

Respond ONLY with valid JSON in this exact format:
{
  "days": [
    {
      "dayNumber": 1,
      "title": "A short title for this day",
      "activities": [
        {
          "time": "9:00 AM",
          "name": "Place Name",
          "description": "Brief description of what to do here",
          "location": "Address or area name"
        }
      ]
    }
  ]
}

Include 4-6 activities per day. Make times realistic with travel time between spots.
  `.trim();

  try {
    const ollamaResponse = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3",
        prompt,
        format: "json",
        stream: false
      })
    });

    const data = await ollamaResponse.json();
    const itineraryText = data.response.trim();

    res.json({ itineraryText });
  } catch (error) {
    console.log("Ollama error:", error);
    res.status(500).json({ error: "Failed to get detailed itinerary" });
  }
};
