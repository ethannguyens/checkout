import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function pudoReducer(state = initialState.pudoSavedAddresses, action) {
  switch (action.type) {
    case types.LOAD_PUDO_SAVED_ADDRESSES_SUCCESS:
      return action.pudoSavedAddresses;

    default:
      return state;
  }
}
