import {SET_AUTHLOADING, SET_USER, SET_LOAN} from './types';

export const setAuthloading = data => ({
  type: SET_AUTHLOADING,
  payload: data,
});

export const setUser = data => ({
  type: SET_USER,
  payload: data,
});

export const setLoan = data => ({
  type: SET_LOAN,
  payload: data,
});
