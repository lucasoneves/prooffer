import { useHistory } from 'react-router';
import * as actionTypes from '../actions/actions';

const initialState = {
  offers: [
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_OFFER:
      const newOffer = action.payload
      return {
        ...state,
        offers: state.offers.concat(newOffer)
      }
    case actionTypes.REMOVE_OFFER:
      const newOffers = [...state.offers];

      newOffers.splice(action.offerId, 1)
      const updatedOffer = state.offers.filter(offer => offer.id !== action.offerId)

      return {
        ...state,
        offers: updatedOffer
      }
  }
  return state
}

export default reducer;