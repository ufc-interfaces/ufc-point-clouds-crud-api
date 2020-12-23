import { RequestHandler } from 'express'

type HandlerRouteMatcher = {
  method: 'all' | 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head'
  route: string
  middlewares?: Array<RequestHandler>
  handler: RequestHandler
}

type PointCloud = {
  id: number
  name: string
  file: string
}
