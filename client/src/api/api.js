export async function fetchAISuggestions({ city, interests } = {}) {
    try {
        const params = new URLSearchParams();
        if (city) params.set("city", city);
        if (interests && interests.length > 0) params.set("interests", interests.join(", "));

        const url = `/api/ai/locations${params.toString() ? `?${params}` : ""}`;
        const res = await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();

        let locationsArray = [];
        try {
            const parsed = JSON.parse(data.response);
            if (Array.isArray(parsed)) {
                locationsArray = parsed;
            } else {
                locationsArray = parsed.result || parsed.spots || parsed.places || [];
            }
        } catch (err) {
            console.error("Failed to parse AI response:", err);
        }
        return locationsArray;
    } catch (error) {
        console.error("Error fetching AI Suggestions:", error);
        throw error;
    }
}

export async function fetchDetailedItinerary({ city, time, commute, group, spots, interests }) {
    try {
        const res = await fetch("/api/ai/itinerary", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                city,
                time,
                commute,
                group,
                spots,
                interests: interests ? interests.join(", ") : "",
            }),
        });

        const data = await res.json();
        const raw = data.itineraryText;

        // Try to parse as structured JSON
        try {
            return JSON.parse(raw);
        } catch {
            return raw;
        }
    } catch (err) {
        console.error("Error fetching detailed itinerary:", err);
        throw err;
    }
}

export async function fetchPlace(name) {
    try {
        const res = await fetch("/api/google/place", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name }),
        });

        if (!res.ok) {
            console.warn(`Place not found or error for "${name}"`);
            return null;
        }

        const data = await res.json();
        return data; // { lat, lng, name }
    } catch (err) {
        console.error("Error fetching place from backend:", err);
        return null;
    }
}
