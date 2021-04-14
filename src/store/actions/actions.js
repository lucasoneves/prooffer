// export const INCREMENT = 'INCREMENT';
// export const DECREMENT = 'DECREMENT';
export const ADD_OFFER = 'ADD_OFFER';
export const REMOVE_OFFER = 'REMOVE_OFFER';
export const EDIT_OFFER = 'EDIT_OFFER';

export const addOffer = () => {
  return {
    type: ADD_OFFER
  }
}

export const removeOffer = (payload) => {
  return {
    type: REMOVE_OFFER,
    payload: payload
  }
}

export const editOffer = (payload) => {
  return {
    type: EDIT_OFFER,
    payload: payload
  }
}