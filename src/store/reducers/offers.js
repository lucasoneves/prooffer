import * as actionTypes from '../actions';

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
      const newOffer = {
        id: Math.floor(Math.random() * 100000000) + 1,
        name: 'Canal Scena',
        role: 'Desenvolvedor Front-End',
        status: 1,
        thumb: 'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/af/68/0f/af680f4c-5e66-7a10-cc80-f0d4497453c7/mza_8120784560120722107.jpg/1200x1200bb.jpg',
        contact: {
          email: 'lucas@scena.com'
        }
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