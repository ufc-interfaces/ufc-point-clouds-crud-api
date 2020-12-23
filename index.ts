import express from 'express'
import { PORT } from './config'
import routeMap from './handlers'

const app = express()

// Recognize json requests
app.use(express.json())

// Maps routes to handlers
routeMap.forEach(({ method, route, handler, middlewares}) => {
  app[method](route, middlewares || [], handler)
})

// App run
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})
