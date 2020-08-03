import axios from 'axios'
import { 
  INCREMENT, 
  DECREMENT, 
  INCREMENT_FIVE,  
  DECREMENT_FIVE,
  SAVE_BANNERS,
  SAVE_RECOMMENDS,
  FETCH_HOME_MULTIDATA
} from './constants.js'

//  发射事件  看看那个组件需要
export const actionCount1 = num => ({
  type: INCREMENT,
  num
})

export const actionCount2 = num => ({
  type: DECREMENT,
  num 
})

export const actionCount3 = num => ({
  type: INCREMENT_FIVE,
  num
})

export const actionCount4 = num => ({
  type: DECREMENT_FIVE,
  num 
})

export const getBanners = (banners) => ({
  type: SAVE_BANNERS,
  banners
})

export const getRecommends = (recommends) => ({
  type: SAVE_RECOMMENDS,
  recommends
})

// redux-thunk中定义的action函数

export const getHomeData = dispatcch => {
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
    }).then(res => {
      dispatcch(getBanners(res.data.data.banner.list))
      dispatcch(getRecommends(res.data.data.recommend.list))
    })
}


// redux-sage拦截action
export const fetchHomeMultidataActions = {
  type: FETCH_HOME_MULTIDATA
}






