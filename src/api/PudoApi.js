import * as secrets from '../modules/secrets';
import mockSavedAddresses from './mockSavedAddresses';
import mockCollectionPoints from './mockCollectionPoints';

function getAddress(latlng) {
  return new Promise ((resolve, reject) => {
      let geocoder = new google.maps.Geocoder;

      geocoder.geocode({'location': latlng}, function(results, status) {
        if (status === 'OK') {
          if (results[0]) {
            const address = results[0].address_components;
            const postcode = address[address.length - 1].long_name;
            resolve([results[0].formatted_address, postcode]);

          } else {
            reject(false);
          }
        } else {
          reject(false);
        }
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
    console.log("geolocation" in navigator);
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          let currentLocation = {};
          currentLocation['latlng'] = {lat: position.coords.latitude, lng: position.coords.longitude};

          getAddress(currentLocation.latlng).then((address) => {
            currentLocation['address'] = address[0];
            currentLocation['postcode'] = address[1];
            resolve(currentLocation);
          })
            .catch(err => reject(err));
        }, (err) => {
          console.log(err);
        }, options);
      } else reject(false);
    });
  }

  static getCollectionPoints(postcode) {
    return new Promise((resolve, reject) => {
      resolve(mockCollectionPoints);
    });
  }
}

export default PudoApi;
