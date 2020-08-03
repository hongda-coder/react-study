import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import sage from './sage'

import reducer from './reducer'
 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose

// 使用中间件
// 1 引入thunkMiddleware中间件
// 2 创建createSagaMiddleware中间件
const sagaMiddleware = createSagaMiddleware()

const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware);
 
const store = createStore(reducer, composeEnhancers (storeEnhancer))

sagaMiddleware.run(sage)

export default store