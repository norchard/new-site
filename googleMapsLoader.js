import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyCsFsakvKaxjZpBi1zZdZT_huYZJX4ng8I",
  version: "weekly",
  libraries: ["places"],
});

export default loader;
