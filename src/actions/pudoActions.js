import PudoApi from '../api/PudoApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadPudoSavedAddressesSuccess(pudoSavedAddresses) {
  return {type: types.LOAD_PUDO_SAVED_ADDRESSES_SUCCESS, pudoSavedAddresses};
}
export function getPudoCurrentLocationSuccess(pudoSavedAddresses) {
  return {type: types.LOAD_PUDO_SAVED_ADDRESSES_SUCCESS, pudoSavedAddresses};
}

export function loadPudoSavedAddresses() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return PudoApi.getAllPudoSavedAddresses().then(pudoSavedAddresses => {
      dispatch(loadPudoSavedAddressesSuccess(pudoSavedAddresses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getPudoCurrentLocation() {
  return dispatch => {
    return PudoApi.getCurrentLocation().then()
  }
}
