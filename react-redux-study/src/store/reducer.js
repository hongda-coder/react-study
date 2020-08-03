import { 
  INCREMENT, 
  DECREMENT, 
  INCREMENT_FIVE,  
  DECREMENT_FIVE,
  SAVE_BANNERS,
  SAVE_RECOMMENDS
} from './constants.js'

const defaultState = {
  count: 0,
  banners: [],
  recommends: []
}

function reducer(state = defaultState, action) { 
  switch (action.type) { 
    case INCREMENT:
      return { ...state, count: state.count + action.num }
    case DECREMENT:
      return { ...state, count: state.count - action.num}
    case INCREMENT_FIVE:
      return { ...state, count: state.count + action.num }
    case DECREMENT_FIVE:
      return { ...state, count: state.count - action.num }  
    case SAVE_BANNERS:
      return { ...state, banners: action.banners }
    case SAVE_RECOMMENDS:
      return { ...state, recommends: action.recommends } 
    default:
      return state
  }
}

export default reducer