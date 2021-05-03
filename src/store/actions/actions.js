import * as actionTypes from './actionTypes';

export const addOffer = (payload) => {
  return {
    type: actionTypes.ADD_OFFER,
    payload: payload
  }
}

export const removeOffer = (payload) => {
  return {
    type: actionTypes.REMOVE_OFFER,
    payload: payload
  }
}