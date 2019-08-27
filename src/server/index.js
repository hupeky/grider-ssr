import express from 'express'
import { matchRoutes } from "react-router-config"
import Routes from '../client/Routes'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express();

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    console.log (store)
    return route.loadData ? route.loadData(store) : null;
  })

  console.log (promises)

  Promise.all(promises).then(() => {
    res.send(renderer(req, store))
  })
  .catch(err => {
    console.log ("**************", err)
  })

 
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})