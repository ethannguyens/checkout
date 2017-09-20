import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function pudoReducer(state = initialState.pudo, action) {
  switch (action.type) {
    case types.LOAD_PUDO_SAVED_ADDRESSES_SUCCESS:
      return Object.assign({}, state, {savedAddresses: action.savedAddresses});

    case types.GET_PUDO_CURRENT_POSITION_SUCCESS:
      return Object.assign({}, state, {currentLocation: action.currentLocation});

    case types.GET_PUDO_COLLECTION_POINTS_SUCCESS:
      return Object.assign({}, state, {collectionPoints: action.collectionPoints});

    case types.ACTIVATE_ADD_COLLECTION_POINT:
      return Object.assign({}, state, {isAddCollectionPoint: action.isAddCollectionPoint});

    case types.DEACTIVATE_ADD_COLLECTION_POINT:
      return Object.assign({}, state, {isAddCollectionPoint: action.isAddCollectionPoint});

    case types.ACTIVATE_COLLECTION_POINT_INFO:
      return Object.assign({}, state, {isCollectionPointInfo: action.isCollectionPointInfo});

    case types.DEACTIVATE_COLLECTION_POINT_INFO:
      return Object.assign({}, state, {isCollectionPointInfo: action.isCollectionPointInfo});

    case types.SELECT_COLLECTION_POINT_SUCCESS:
      return Object.assign({}, state, {selectedCollectionPoint: action.selectedCollectionPoint});

    case types.ENTER_COLLECTION_POINT:
      return Object.assign({}, state, {activeCollectionPoint: action.key});

    case types.LEAVE_COLLECTION_POINT:
      return Object.assign({}, state, {activeCollectionPoint: action.key});

    default:
      return state;
  }
}
