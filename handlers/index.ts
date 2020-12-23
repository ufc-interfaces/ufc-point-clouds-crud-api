import { default as createHandler } from './create-handler'
import { default as indexHandler } from './index-handler'
import { HandlerRouteMatcher } from '../types'

const routeMap: Array<HandlerRouteMatcher> = [
  {
    method: 'get',
    route: '/',
    handler: indexHandler
  },
  {
    method: 'post',
    route: '/api/point-clouds',
    handler: createHandler
  },
]

export default routeMap
