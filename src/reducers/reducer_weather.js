import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    //never manipulate state
      return state.concat([action.payload.data]); //should not use push method. instead, concat do not change state, it return a new array. all reducer must return a new state.
      // or return [action.payload.data, ...state];

  }
  return state;
}
