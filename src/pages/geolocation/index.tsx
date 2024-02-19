import useGeolocation from "../../hooks/useGeolocation";
export default function GeolocationPage() {
  const location = useGeolocation();

  return (
    <div>
      {location.loaded
        ? JSON.stringify(location)
        : "Location data not available yet"}
    </div>
  );
}
