import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "./map.scss";

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  });
  const center = {
    lat: 40.73061,
    lng: -73.935242,
  };
  return isLoaded ? (
    <>
      <GoogleMap mapContainerClassName="map" center={center} zoom={15}>
        <></>
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};
export default MapComponent;
