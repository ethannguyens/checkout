import PudoApi from '../api/PudoApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadPudoSavedAddressesSuccess(savedAddresses) {
  return {type: types.LOAD_PUDO_SAVED_ADDRESSES_SUCCESS, savedAddresses};
}

export function getPudoCurrentLocationSuccess(currentLocation) {
  return {type: types.GET_PUDO_CURRENT_POSITION_SUCCESS, currentLocation};
}

export function getPudoCollectionPointsSuccess(collectionPoints) {
  return {type: types.GET_PUDO_COLLECTION_POINTS_SUCCESS, collectionPoints};
}

export function activateAddCollectionPoint() {
  const isAddCollectionPoint = true;
  return {type: types.ACTIVATE_ADD_COLLECTION_POINT, isAddCollectionPoint};
}

export function deactivateAddCollectionPoint() {
  const isAddCollectionPoint = false;
  return {type: types.DEACTIVATE_ADD_COLLECTION_POINT, isAddCollectionPoint};
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

export function getPudoLocationPoints() {
  return dispatch => {
    return PudoApi.getCollectionPoints().then(collectionPoinnts => {
      dispatch(getPudoCollectionPointsSuccess(collectionPoinnts))
    }).catch(error => {
      console.log(error);
    });
  }
}
