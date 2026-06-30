import { useState, useEffect } from "react";
import { fetchAISuggestions, fetchDetailedItinerary } from "../api/api";

export default function useLocations() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);       
  const [error, setError] = useState(null);           

  useEffect(() => {               

    async function getSuggestions() {                   // ⑥ Async function to fetch suggestions
      setLoading(true);                                 // ⑦ Set loading to true before fetch
      setError(null);                                   // ⑧ Reset previous errors

      try {
        const data = await fetchAISuggestions();        // ⑨ Call API helper to fetch suggestions
        setLocations(data);
      } catch (err) {
        setError(err);                                  // ⑪ If error, save error to state
      } finally {
        setLoading(false);                              // ⑫ Always set loading to false after fetch
      }
    }

    getSuggestions();                                   // ⑬ Call the async fetch function
  }, []);                                          // ⑭ Dependency array - rerun if `query` changes

  return { locations, loading, error };              // ⑮ Return current state values to the component
}