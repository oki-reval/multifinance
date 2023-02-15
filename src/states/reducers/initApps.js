import {SET_AUTHLOADING, SET_USER, SET_LOAN} from '../actions/types';

const initialState = {
  isAuthLoading: true,
  user: null,
  loadingLoan: true,
};

export default initApps = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHLOADING:
      return {...state, isAuthLoading: action.payload};
    case SET_USER:
      return {...state, user: action.payload};
    case SET_LOAN:
      return {
        ...state,
        loadingLoan: false,
      };
    default:
      return state;
  }
};
