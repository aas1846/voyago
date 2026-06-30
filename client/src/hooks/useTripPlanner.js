import { useState, useCallback } from 'react';
import { fetchAISuggestions, fetchDetailedItinerary, fetchPlace } from '../api/api';

function useTripPlanner() {
  const [phase, setPhase] = useState('idle');
  const [phaseMessage, setPhaseMessage] = useState('');
  const [coordinates, setCoordinates] = useState([]);
  const [centerCoords, setCenterCoords] = useState(null);
  const [itinerary, setItinerary] = useState(null);
  const [error, setError] = useState(null);

  const startPlanning = useCallback(async (answers) => {
    setPhase('planning');
    setError(null);
    setCoordinates([]);
    setCenterCoords(null);
    setItinerary(null);

    try {
      // 1. Geocode the destination city
      setPhaseMessage('Finding your destination...');
      const destCoords = await fetchPlace(answers.destination);
      if (destCoords) {
        setCenterCoords(destCoords);
      }

      // 2. Get AI location suggestions
      setPhaseMessage('Discovering the best spots...');
      const locations = await fetchAISuggestions({
        city: answers.destination,
        interests: answers.interests,
      });

      // 3. Geocode each location
      setPhaseMessage('Mapping out your adventure...');
      const coords = await Promise.all(
        locations.map((name) => fetchPlace(name))
      );
      const validCoords = coords.filter(Boolean);
      setCoordinates(validCoords);

      // 4. Get detailed itinerary
      setPhaseMessage('Building your perfect itinerary...');
      const result = await fetchDetailedItinerary({
        city: answers.destination,
        time: answers.duration,
        commute: answers.commute,
        group: answers.group,
        spots: validCoords,
        interests: answers.interests,
      });
      setItinerary(result);

      setPhase('done');
      setPhaseMessage('');
    } catch (err) {
      console.error('Trip planning error:', err);
      setError('Something went wrong while planning your trip. Please try again.');
      setPhase('error');
      setPhaseMessage('');
    }
  }, []);

  const reset = useCallback(() => {
    setPhase('idle');
    setPhaseMessage('');
    setCoordinates([]);
    setCenterCoords(null);
    setItinerary(null);
    setError(null);
  }, []);

  return {
    phase,
    phaseMessage,
    coordinates,
    centerCoords,
    itinerary,
    error,
    startPlanning,
    reset,
  };
}

export default useTripPlanner;
