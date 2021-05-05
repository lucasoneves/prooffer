import { useHistory } from 'react-router';
import * as actionTypes from '../actions/actions';

const initialState = {
  offers: [{
    company_name: "Alura",
    role: "Desenvolvedor Front-End",
    thumb: "https://bossabox.com/blog/wp-content/uploads/2019/06/alura.jpg",
    status: 1,
    contact: {
      email: 'luciana@wayon.com.br'
    },
    id: Math.floor(Math.random() * 100000000) + 1
  },
  {
    company_name: "Twitch",
    role: "Desenvolvedor Front-End",
    thumb: "https://i.pinimg.com/originals/94/3a/eb/943aebb663aaa7a87343bb230c91dcc7.png",
    status: 1,
    contact: {
      email: 'luciana@twitch.com.br'
    },
    id: Math.floor(Math.random() * 100000000) + 1
  },
  {
    company_name: "Toggl",
    role: "Desenvolvedor Front-End",
    thumb: "https://d1w82f5xc78wju.cloudfront.net/uploads/targetware/image/file/17899/toggl.master.jpg",
    status: 1,
    contact: {
      email: 'luciana@toggl.com.br'
    },
    id: Math.floor(Math.random() * 100000000) + 1
  }]
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