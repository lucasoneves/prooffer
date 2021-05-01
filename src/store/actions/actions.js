// export const INCREMENT = 'INCREMENT';
// export const DECREMENT = 'DECREMENT';
export const ADD_OFFER = 'ADD_OFFER';
export const REMOVE_OFFER = 'REMOVE_OFFER';

export const addOffer = (payload) => {
  console.log("Payload", payload)
  return {
    type: ADD_OFFER,
    payload: payload
  }
}

export const removeOffer = (payload) => {
  return {
    type: REMOVE_OFFER,
    payload: payload
  }
}