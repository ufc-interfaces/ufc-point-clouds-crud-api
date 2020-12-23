import express, { Request, Response } from 'express'
import { PORT } from './config'
import routeMap from './handlers'

const app = express()

routeMap.forEach(({ method, route, handler }) => app[method](route, handler))

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})
