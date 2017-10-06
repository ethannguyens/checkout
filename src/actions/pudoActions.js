import PudoApi from '../api/PudoApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

const mapZoomDisplay = 15;
const mapZoomDefault = 11;

  export function loadPudoSavedAddressesSuccess(savedAddresses) {
  return {type: types.LOAD_PUDO_SAVED_ADDRESSES_SUCCESS, savedAddresses};
}

export function getPudoCurrentLocationSuccess(currentLocation) {
  return {type: types.UPDATE_PUDO_CURRENT_POSITION_SUCCESS, currentLocation};
}

export function updatePudoCurrentLocationSuccess(currentLocation) {
  return {type: types.UPDATE_PUDO_CURRENT_POSITION_SUCCESS, currentLocation};
}

export function getPudoCollectionPointsSuccess(collectionPoints) {
  return {type: types.GET_PUDO_COLLECTION_POINTS_SUCCESS, collectionPoints};
}

export function updatetPudoCollectionPointsSuccess(collectionPoints) {
  return {type: types.UPDATE_PUDO_COLLECTION_POINTS_SUCCESS, collectionPoints};
}

//Hide Collection Point
export function hidePudoCollectionPoints() {
  const hideCollectionPoint = true;
  return {type: types.HIDE_ADD_COLLECTION_POINT_SUCESS, hideCollectionPoint};
}

//Open Add new collection point menu
export function activateAddCollectionPoint() {
  const newState = {
    isAddCollectionPoint : true,
    hideCollectionPoint: false
  };
  return {type: types.ACTIVATE_ADD_COLLECTION_POINT_SUCESS, newState};
}

export function deactivateAddCollectionPoint() {
  const isAddCollectionPoint = false;
  return {type: types.DEACTIVATE_ADD_COLLECTION_POINT_SUCCESS, isAddCollectionPoint};
}

//Hover
export function enterCollectionPoint(key) {
  return {type: types.ENTER_COLLECTION_POINT, key};
}

export function leaveCollectionPoint() {
  const key = -1;
  return {type: types.LEAVE_COLLECTION_POINT, key};
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

export function getCurrentLocationCollectionPoints() {
  return dispatch => {
    dispatch(getPudoCurrentLocation());
    dispatch(getPudoLocationPoints());
  };
}

export function updateCurrentLoationCollectionPoints() {
    return dispatch => {
      dispatch();
      dispatch();
    };
}

export function getPudoCurrentLocation() {
  return dispatch => {
    return PudoApi.getCurrentLocation().then(currentLocation => {
      dispatch(getPudoCurrentLocationSuccess(currentLocation));
    }).catch(error => {
      console.log(error);
    });
  };
}

//user manually enter shipping address
export function updatePudoCurrentLocation(currentLocation) {
    return dispatch => {
      dispatch(getPudoCurrentLocationSuccess(currentLocation));
    };
}

export function getPudoLocationPoints() {
  return dispatch => {
    return PudoApi.getCollectionPoints().then(collectionPoinnts => {
      dispatch(getPudoCollectionPointsSuccess(collectionPoinnts));
    }).catch(error => {
      console.log(error);
    });
  };
}

//Collection point info
export function displayCollectionPoint(key, center) {
  const point = {
    isDisplayCollectionPointInfo: true,
    isDisplayPostcodeInput: false,
    displayCollectionPoint: key,
    mapZoom: mapZoomDisplay,
    mapCenter: center
  };

  return {type: types.DISPLAY_COLLECTION_POINT_SUCCESS, point};
}

export function deactivateDisplayCollectionPointInfo() {
    const newState = {
      isDisplayCollectionPointInfo: false,
      isDisplayPostcodeInput: true,
      displayCollectionPoint: -1,
      mapZoom: mapZoomDefault
    };

  return {type: types.DEACTIVATE_DISPLAY_COLLECTION_POINT_INFO_SUCCESS, newState};
}



export function displayCollectionPointInfo(key, point) {
  return dispatch => {
    const center = {lat: point.latitude, lng: point.longitude};

    dispatch(displayCollectionPoint(key, center));
  };
}
