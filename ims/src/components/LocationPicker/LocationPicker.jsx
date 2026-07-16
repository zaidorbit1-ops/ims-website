import React, { useState, useEffect, useRef } from "react";
import { MapPin, X, AlertCircle } from "lucide-react";

const LocationPicker = ({ label, name, value, onChange, required }) => {
  const [inputMode, setInputMode] = useState("input");
  const [showMap, setShowMap] = useState(false);
  const [mapError, setMapError] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapLoading, setMapLoading] = useState(false);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  // Initialize Google Maps
  useEffect(() => {
    if (!showMap || inputMode !== "map") return;

    setMapLoading(true);
    setMapError("");

    const loadMapScript = () => {
      if (window.google && window.google.maps) {
        setTimeout(() => initializeMap(), 100);
        return;
      }

      const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "AIzaSyCH-6p9OZDGUtOzTp9cXwY4nJjvgJfVW2E";
      
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places,geocoding`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        setTimeout(() => initializeMap(), 500);
      };

      script.onerror = () => {
        setMapError("Google Maps not available. Please enter address manually.");
        setMapLoading(false);
        setShowMap(false);
        setInputMode("input");
      };

      document.head.appendChild(script);
    };

    loadMapScript();
  }, [showMap, inputMode]);

  const initializeMap = () => {
    try {
      if (!mapRef.current) {
        setMapError("Map container error. Try again.");
        setMapLoading(false);
        return;
      }

      if (!window.google?.maps) {
        setMapError("Google Maps not loaded. Try again.");
        setMapLoading(false);
        return;
      }

      // Clear previous map
      mapRef.current.innerHTML = "";

      const defaultLocation = { lat: 29.7604, lng: -95.3698 };

      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 13,
        center: defaultLocation,
        mapTypeControl: true,
        fullscreenControl: true,
        zoomControl: true,
        streetViewControl: false,
      });

      mapInstanceRef.current = map;
      setMapLoading(false);
      setMapError("");

      map.addListener("click", (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();

        if (markerRef.current) markerRef.current.setMap(null);

        markerRef.current = new window.google.maps.Marker({
          position: { lat, lng },
          map: map,
          title: "Selected Location",
          animation: window.google.maps.Animation.DROP,
        });

        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
          if (status === "OK" && results[0]) {
            const address = results[0].formatted_address;
            setSelectedLocation({ address, lat, lng });
          } else {
            setSelectedLocation({
              address: `${lat.toFixed(4)}, ${lng.toFixed(4)}`,
              lat,
              lng,
            });
          }
        });
      });
    } catch (err) {
      console.error("Map error:", err);
      setMapError("Error loading map. Please enter address manually.");
      setMapLoading(false);
    }
  };

  const handleInputChange = (e) => {
    onChange({ target: { name, value: e.target.value } });
  };

  const confirmMapLocation = () => {
    if (selectedLocation) {
      onChange({
        target: {
          name,
          value: selectedLocation.address,
        },
      });
      closeMap();
    }
  };

  const closeMap = () => {
    setShowMap(false);
    setInputMode("input");
    setSelectedLocation(null);
    setMapLoading(false);
    setMapError("");
  };

  return (
    <div className="relative">
      <label className="block text-[10px] font-semibold tracking-[0.25em] uppercase text-gold mb-1.5">
        {label}
      </label>

      {/* Mode Toggle */}
      <div className="flex gap-2 mb-3">
        <button
          type="button"
          onClick={() => {
            setInputMode("input");
            setShowMap(false);
          }}
          className={`flex-1 py-2 px-3 text-xs font-semibold rounded transition-all ${
            inputMode === "input"
              ? "bg-gold text-charcoal"
              : "bg-gold/20 text-gold border border-gold/30 hover:bg-gold/30"
          }`}
        >
          Enter Address
        </button>
        <button
          type="button"
          onClick={() => {
            setInputMode("map");
            setShowMap(true);
          }}
          className={`flex-1 py-2 px-3 text-xs font-semibold rounded transition-all ${
            inputMode === "map"
              ? "bg-gold text-charcoal"
              : "bg-gold/20 text-gold border border-gold/30 hover:bg-gold/30"
          }`}
        >
          Pick on Map
        </button>
      </div>

      {/* Input Mode */}
      {inputMode === "input" && (
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60">
            <MapPin size={14} />
          </span>
          <input
            type="text"
            name={name}
            value={value}
            onChange={handleInputChange}
            placeholder="Enter pickup address or location"
            required={required}
            className="w-full bg-cream border border-gold/25 text-charcoal placeholder-gray-400 text-sm py-3.5 pl-11 pr-4 focus:outline-none focus:border-gold transition-colors duration-300"
          />
        </div>
      )}

      {/* Map Modal */}
      {showMap && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-charcoal p-4 flex justify-between items-center">
              <h3 className="text-white font-serif text-lg">Select Location</h3>
              <button
                onClick={closeMap}
                className="text-white hover:text-gold transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Error Message */}
            {mapError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 flex items-start gap-3">
                <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm">Error</p>
                  <p className="text-sm">{mapError}</p>
                </div>
              </div>
            )}

            {/* Loading State */}
            {mapLoading && (
              <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-4 flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                <span>Loading map...</span>
              </div>
            )}

            {/* Map Container */}
            {!mapError && (
              <div className="flex-1 relative min-h-[400px] bg-gray-200">
                <div 
                  ref={mapRef} 
                  className="w-full h-full"
                  style={{ minHeight: "400px" }}
                />
                {!mapLoading && !selectedLocation && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-gray-100/50">
                    <p className="text-gray-600 text-sm font-medium">Click on map to select location</p>
                  </div>
                )}
              </div>
            )}

            {/* Selected Location Info */}
            {selectedLocation && (
              <div className="bg-cream border-t border-gold/20 p-4">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Selected Location:</strong>
                </p>
                <p className="text-sm font-medium text-charcoal mb-4 break-words">
                  {selectedLocation.address}
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={confirmMapLocation}
                    className="flex-1 bg-gold text-charcoal font-bold py-2.5 rounded hover:bg-gold/90 transition-colors"
                  >
                    Confirm Location
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedLocation(null)}
                    className="flex-1 bg-gray-300 text-charcoal font-bold py-2.5 rounded hover:bg-gray-400 transition-colors"
                  >
                    Select Again
                  </button>
                </div>
              </div>
            )}

            {!selectedLocation && !mapLoading && !mapError && (
              <div className="bg-cream border-t border-gold/20 p-4 text-center text-sm text-gray-600">
                Click anywhere on the map to select a location
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationPicker;
