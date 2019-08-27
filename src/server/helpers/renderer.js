import React from "react"
import { renderToString } from 'react-dom/server'
import { StaticRouter } from "react-router-dom"
import Routes from '../../client/Routes'
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'
import { Provider } from 'react-redux'
import { JssProvider, SheetsRegistry } from 'react-jss'

export default (req, store) => {
  const sheets = new SheetsRegistry()
  const content = renderToString(
    <JssProvider registry={sheets}>
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>
    </JssProvider>
  )
  console.log(content)
  return `
  <html>
  <head>
    <style type="text/css" id="server-side-styles">
      ${sheets.toString()}
    </style>
  </head>
  <body>
  <div id="root">${content}</div>
  <script>
    window.INITIAL_STATE = ${serialize(store.getState())}
  </script>
  <script src="bundle.js"></script>
  </body>
  </html>
  `
}