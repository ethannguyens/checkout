import * as secrets from '../modules/secrets';
import mockSavedAddresses from './mockSavedAddresses';
import mockCollectionPoints from './mockCollectionPoints';

let GoogleMapsLoader = require('google-maps');

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
      resolve(Object.assign([], mockSavedAddresses));
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

  static getCollectionPoints(postcode) {
    return new Promise((resolve, reject) => {
      resolve(mockCollectionPoints);
    })
  }
}

export default PudoApi;
