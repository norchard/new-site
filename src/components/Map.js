import { useState, useEffect } from "react";

const Map = () => {
  const [map, setMap] = useState(null);
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoibm9yY2gyIiwiYSI6ImNsbnBjeWoxOTBscGwyb3FtODUyMmJvODUifQ.MyQTyeDY3IUX7ivhEKpzGw";
    const map = new mapboxgl.Map({
      container: "map",
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-95.3825, 29.7719444],
      zoom: 12,
    });

    var popup = new mapboxgl.Popup()
      .setText("Silos at Sawyer Yards")
      .addTo(map);

    // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker()
      .setLngLat([-95.3825, 29.7719444])
      .addTo(map)
      .setPopup(popup);
  }, []);

  return (
    <div
      id="map"
      style={{
        height: "600px",
        width: "600px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    ></div>
  );
};
export default Map;
