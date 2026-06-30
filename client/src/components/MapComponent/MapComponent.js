import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import './MapComponent.css';
import Itinerary from '../Itinerary/Itinerary';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function MapComponent({ coordinates = [], centerCoords, itinerary }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markersRef = useRef([]);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current) return;

    const center = centerCoords
      ? [centerCoords.lng, centerCoords.lat]
      : [-74, 40.7528];

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center,
      zoom: 11,
    });

    map.current.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');

    return () => {
      if (map.current) map.current.remove();
    };
  }, []);

  // Fly to new center when destination changes
  useEffect(() => {
    if (map.current && centerCoords) {
      map.current.flyTo({
        center: [centerCoords.lng, centerCoords.lat],
        zoom: 12,
        duration: 2000,
      });
    }
  }, [centerCoords]);

  // Update markers when coordinates change
  useEffect(() => {
    // Clear old markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    if (!map.current) return;

    coordinates.forEach(({ lat, lng, name }) => {
      const marker = new mapboxgl.Marker()
        .setLngLat({ lng, lat })
        .setPopup(new mapboxgl.Popup().setHTML(`<div class="popup-text">${name}</div>`))
        .addTo(map.current);
      markersRef.current.push(marker);
    });
  }, [coordinates]);

  return (
    <div className="parent-container">
      <div className="sidebar">
        <div className="sidebar-header">Your Itinerary</div>
        <div className="itinerary-list">
          <Itinerary itinerary={itinerary} />
        </div>
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default MapComponent;
