import { useState } from "react";

interface Coodinates {
  latitude: number;
  longitude: number;
}

export default function Geolocation2Page() {
  const [position, setPosition] = useState<Coodinates | null>(null);

  const askForLocation = (): void => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log("Error getting location:", error.message);
        },
      );
    } else {
      alert("Geolocation is not supported in this browser");
    }
  };

  return (
    <div>
      <div onClick={askForLocation}>
        {position ? (
          <div>
            Latitude: {position.latitude}, Longitude: {position.longitude}
          </div>
        ) : (
          "Click to get your current location"
        )}
      </div>
    </div>
  );
}
