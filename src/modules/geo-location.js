export default function geoLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  } else return false;
}
