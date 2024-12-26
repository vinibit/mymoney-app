import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import Reducers from './Main/Reducers'
import Routes from './Main/Routes'

const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise, multi, thunk)(createStore)(Reducers, DevTools)

ReactDOM.render(
    <ReduxProvider store={store}>
        <Routes />
    </ReduxProvider>
, document.getElementById('app'))