import * as actionTypes from '../actions/actions';

const initialState = {
  offers: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_OFFER:
      const newOffer = action.payload
      console.log(action.payload)
      return {
        ...state,
        offers: state.offers.concat(newOffer)
      }
    case actionTypes.REMOVE_OFFER:

      return {
        ...state,
        offers: state.offers.filter(offer => offer.id !== action.offerId)
      }
  }
  return state
}

export default reducer;