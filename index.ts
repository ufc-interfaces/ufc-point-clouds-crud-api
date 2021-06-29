import express from 'express'
import { PORT } from './config'
import routeMap from './src/handlers'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

// Parse request data
app.use(bodyParser.json({ limit: '100mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));

// Enable cors
app.use(cors())

// Serve uploads folder as static
app.use('/uploads', express.static('uploads'))

// Maps routes to handlers
routeMap.forEach(({ method, route, handler, middlewares}) => {
  // @ts-ignore
  app[method](route, middlewares || [], handler)
})

// App run
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})
