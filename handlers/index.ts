import { default as createHandler } from './create-handler'
import { default as indexHandler } from './index-handler'
import { HandlerRouteMatcher } from '../types'
import * as validators from './request-validators'

const routeMap: Array<HandlerRouteMatcher> = [
  {
    method: 'get',
    route: '/',
    handler: indexHandler
  },
  {
    method: 'post',
    middlewares: [...validators.createValidator],
    route: '/api/point-clouds',
    handler: createHandler
  },
]

export default routeMap
