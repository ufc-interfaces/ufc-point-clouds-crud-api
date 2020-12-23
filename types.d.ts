import { RequestHandler } from 'express'

type HandlerRouteMatcher = {
  method: 'all' | 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head'
  route: string
  handler: RequestHandler
}
