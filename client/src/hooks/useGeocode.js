import { useState, useEffect } from "react";
import { fetchPlace } from "../api/api";

export default function useGeocode(locations) {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    if (!Array.isArray(locations) || locations.length === 0) return;

    async function getCoordinates() {
      try {
        const results = await Promise.all(
          locations.map(async (location) => {
            const name = typeof location === "string" ? location : location.name;
            const coords = await fetchPlace(name);
            return coords ? coords : null;
          })
        );

        setCoordinates(results.filter(r => r));
      } catch (error) {
        console.error("Error fetching coordinates:", error);
        setCoordinates([]);
      }
    }

    getCoordinates();
  }, [locations]);

  return coordinates; // [{ lat, lng, name }]
}