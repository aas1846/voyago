# Voyago ✈️

An AI-powered travel itinerary planner that generates personalized city trip plans based on your preferences — no generic guides, no one-size-fits-all recommendations.

## What it does

Voyago walks you through a short questionnaire (destination, trip duration, commute style, group type, and interests), then:

1. Uses **Llama 3 via Ollama** to suggest the best spots in your chosen city tailored to your interests
2. Geocodes each location using the **Google Places API**
3. Plots all spots on an interactive **Mapbox** map
4. Generates a detailed day-by-day itinerary with realistic timing and travel between stops

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, React Router |
| Backend | Node.js, Express |
| AI | Llama 3 (Ollama — runs locally) |
| Maps | Mapbox GL JS |
| Geocoding | Google Places API |
| Database | Prisma + PostgreSQL |

## Project Structure

```
voyago/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/   # Navbar, Questionnaire, MapComponent, Itinerary
│   │   ├── hooks/        # useTripPlanner, useGeocode, useLocations
│   │   ├── pages/        # Landing, About, Blog
│   │   └── api/          # API call wrappers
├── server/          # Node.js/Express backend
│   ├── Routes/      # AI, geocode, Google Places routes
│   ├── controllers/ # Route logic + Ollama integration
│   └── generated/   # Prisma client
└── server-dotnet/   # .NET backend (experimental)
```

## Getting Started

### Prerequisites

- Node.js v18+
- [Ollama](https://ollama.com) installed and running locally
- Llama 3 pulled: `ollama pull llama3`
- A Mapbox account and access token
- A Google Cloud project with Places API enabled

### Installation

1. Clone the repo
   ```bash
   git clone https://github.com/yourusername/voyago.git
   cd voyago
   ```

2. Install server dependencies
   ```bash
   cd server && npm install
   ```

3. Install client dependencies
   ```bash
   cd ../client && npm install
   ```

4. Set up environment variables

   In `server/`:
   ```bash
   cp .env.example .env
   ```
   Fill in your `GOOGLE_API_KEY`, `MAPBOX_API_KEY`, and `DATABASE_URL`.

   In `client/`:
   ```bash
   cp .env.example .env
   ```
   Fill in your `REACT_APP_MAPBOX_ACCESS_TOKEN`.

5. Start Ollama
   ```bash
   ollama serve
   ```

6. Start the backend
   ```bash
   cd server && node server.js
   ```

7. Start the frontend
   ```bash
   cd client && npm start
   ```

The app will be running at `http://localhost:3000`.

## How the AI itinerary generation works

When you submit the questionnaire, the app makes two sequential calls to the local Ollama API:

1. **Location suggestions** — a prompt asking Llama 3 to recommend 8–12 spots in your destination city filtered by your interests, returned as a raw JSON array of place names
2. **Detailed itinerary** — a second prompt that takes those geocoded spots, your trip duration, commute preference, and group type, and generates a structured day-by-day plan with activity times, descriptions, and locations

Both prompts enforce JSON-only responses for reliable parsing. Ollama runs entirely on your local machine — no external AI API calls, no usage costs.

## Screenshots

> Coming soon — demo video in progress

## Status

Core itinerary generation and map rendering are fully functional. Built as a solo project to explore local LLM integration and full-stack React/Node.js architecture.
