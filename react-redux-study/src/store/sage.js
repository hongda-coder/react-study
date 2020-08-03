import { takeEvery, put, all } from 'redux-saga/effects'
import axios from "axios"

import { FETCH_HOME_MULTIDATA } from './constants'

import { getBanners, getRecommends } from './actions'

function* fetchHomemultidata(actions) { 
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata") 
  const banners = res.data.data.banner.list
  const recommends = res.data.data.recommend.list
  // yield put(getBanners(banners))
  // yield put(getRecommends(recommends))
  yield all([
    yield put(getBanners(banners)),
    yield put(getRecommends(recommends))
  ])
}
 
function* mySaga () {
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomemultidata)
}

export default mySaga