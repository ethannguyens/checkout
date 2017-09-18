import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function pudoReducer(state = initialState.pudo, action) {
  switch (action.type) {
    case types.LOAD_PUDO_SAVED_ADDRESSES_SUCCESS:
      return Object.assign({}, state, {savedAddresses: action.savedAddresses});
      break;

    case types.GET_PUDO_CURRENT_POSITION_SUCCESS:
      return Object.assign({}, state, {currentLocation: action.currentLocation});
      break;

    case types.GET_PUDO_COLLECTION_POINTS_SUCCESS:
      return Object.assign({}, state, {collectionPoints: action.collectionPoints});
      break;

    case types.ACTIVATE_ADD_COLLECTION_POINT:
      return Object.assign({}, state, {isAddCollectionPoint: action.isAddCollectionPoint});
      break;

    case types.DEACTIVATE_ADD_COLLECTION_POINT:
      return Object.assign({}, state, {isAddCollectionPoint: action.isAddCollectionPoint});
      break;

    case types.ACTIVATE_COLLECTION_POINT_INFO:
      return Object.assign({}, state, {isCollectionPointInfo: action.isCollectionPointInfo});
      break;

    case types.DEACTIVATE_COLLECTION_POINT_INFO:
      return Object.assign({}, state, {isCollectionPointInfo: action.isCollectionPointInfo});
      break;

    case types.SELECT_COLLECTION_POINT_SUCCESS:
      return Object.assign({}, state, {selectedCollectionPoint: action.selectedCollectionPoint});
      break;

    default:
      return state;
  }
}
