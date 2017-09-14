import PudoApi from '../api/PudoApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadPudoSavedAddressesSuccess(savedAddresses) {
  return {type: types.LOAD_PUDO_SAVED_ADDRESSES_SUCCESS, savedAddresses};
}

export function getPudoCurrentLocationSuccess(currentLocation) {
  return {type: types.GET_PUDO_CURRENT_POSITION_SUCCESS, currentLocation};
}

export function loadPudoSavedAddresses() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return PudoApi.getAllPudoSavedAddresses().then(savedAddresses => {
      dispatch(loadPudoSavedAddressesSuccess(savedAddresses));
    }).catch(error => {
      console.log(error);
    });
  };
}

export function getPudoCurrentLocation() {
  return dispatch => {
    return PudoApi.getCurrentLocation().then(currentLocation => {
      dispatch(getPudoCurrentLocationSuccess(currentLocation))
    }).catch(error => {
      console.log(error);
    });
  }
}
