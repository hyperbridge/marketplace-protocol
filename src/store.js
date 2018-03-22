import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createBrowserHistory from 'history/createBrowserHistory'

export const history = createBrowserHistory()


//export const history = browserHistory
export const initialState = {}
export const enhancers = []
export const middleware = [
    thunk,
    routerMiddleware(history)
]

export const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)
