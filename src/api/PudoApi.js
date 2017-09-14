import * as secrets from '../modules/secrets';

let GoogleMapsLoader = require('google-maps');

const pudoSavedAddresses = [{
  "addressId": "101",
  "addressee": "WELDOM",
  "buildingNameNumber": "77",
  "organisationName": "",
  "line1": "AVENUE DU GENERAL DE GAULLE",
  "line2": "BOFFERON FRUITS",
  "line3": "ROYERES",
  "line4": "",
  "postcode": "87400",
  "countryName": "FRANCE",
  "countryCode": "FR"
}, {
  "addressId": "102",
  "addressee": "PUDO",
  "buildingNameNumber": "77",
  "organisationName": "",
  "line1": "AVENUE DU GENERAL DE GAULLE",
  "line2": "BOFFERON FRUITS",
  "line3": "ROYERES",
  "line4": "",
  "postcode": "87400",
  "countryName": "UK",
  "countryCode": "GB"
}];

GoogleMapsLoader.KEY = secrets.googleKey;

function getAddress(latlng) {
  let geocoder;
  return new Promise ((resolve, reject) => {
    GoogleMapsLoader.load((google) => {
      geocoder = new google.maps.Geocoder;

      geocoder.geocode({'location': latlng}, function(results, status) {
        if (status === 'OK') {
          if (results[0]) {
            resolve(results[0].formatted_address);
          } else {
            reject(false)
          }
        } else {
          reject(false);
        }
      });
    });
  });
}

class PudoApi {
  static getAllPudoSavedAddresses() {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], pudoSavedAddresses));
    });
  }

  static getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latlng = {lat: position.coords.latitude, lng: position.coords.longitude};

          getAddress(latlng).then(address => resolve(address))
            .catch(err => reject(err));
        });
      } else reject(false);
    });
  }
}

export default PudoApi;
