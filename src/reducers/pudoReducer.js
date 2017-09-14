import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function pudoReducer(state = initialState.pudo, action) {
  switch (action.type) {
    case types.LOAD_PUDO_SAVED_ADDRESSES_SUCCESS:
      return Object.assign({}, state, {savedAddresses: action.savedAddresses});
      break;
    case types.GET_PUDO_CURRENT_POSITION_SUCCESS:
      return Object.assign({}, state, action.currentLocation);
      break;
    default:
      return state;
  }
}
