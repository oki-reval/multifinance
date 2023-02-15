import {SET_AUTHLOADING, SET_TOKEN} from '../actions/types';

const initialState = {
  isAuthLoading: false,
  token: null,
};

export default initApps = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHLOADING:
      return {...state, isAuthLoading: payload};
    case SET_TOKEN:
      return {...state, token: payload};
    default:
      return state;
  }
};
