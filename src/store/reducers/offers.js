import * as actionTypes from '../actions';

const initialState = {
  offers: [{
    name: "Alura",
    role: "Desenvolvedor Front-End",
    thumb: "https://bossabox.com/blog/wp-content/uploads/2019/06/alura.jpg",
    status: 1,
    contact: {
      email: 'luciana@wayon.com.br'
    },
    id: Math.floor(Math.random() * 100000000) + 1
  }]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_OFFER:
      const newOffer = {
        id: Math.floor(Math.random() * 100000000) + 1,
        name: 'Alura',
        role: 'Desenvolvedor Front-End',
        status: 1
      }
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