// root entry point for client side app

console.log('hi there')

import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Routes from './Routes'
import { renderRoutes } from 'react-router-config'
import reducers from './reducers'

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk))

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'), () => {
    // We don't need the static css any more once we have launched our application.
    const ssStyles = document.getElementById('server-side-styles')
    ssStyles.parentNode.removeChild(ssStyles)
  })