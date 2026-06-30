// Import the Express framework (library) for creating the backend server. Meant for Defining routes (URLs) and handling HTTP requests (GET, POST, etc.)
const express = require("express");

// Import CORS to, once activated, allow requests from the frontend (or any frontend) from a different port (React runs on a different port)
const cors = require("cors");

// Create an instance of the Express app
const app = express();

// Load environment variables from the .env file into process.env  
require("dotenv").config();

// Enable CORS so React (on a different port) can make requests
app.use(cors());

// Enable JSON parsing for incoming requests
app.use(express.json());

// Route imports
const aiRoutes = require("./Routes/aiRoutes");
const geocodeRoute = require("./Routes/geocodeRoute");
const googlePlacesRoute = require("./Routes/googlePlacesRoutes");

app.use("/api/ai", aiRoutes);
app.use("/api/geocode", geocodeRoute);
app.use("/api/google", googlePlacesRoute);

// Set the port from environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// Start the backend server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

