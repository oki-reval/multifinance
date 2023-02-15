import {SET_AUTHLOADING, SET_TOKEN} from './types';

export const setAuthloading = data => ({
  type: SET_AUTHLOADING,
  payload: data,
});

export const setToken = data => ({
  type: SET_TOKEN,
  payload: data,
});
