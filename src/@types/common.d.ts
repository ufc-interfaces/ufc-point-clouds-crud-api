import {RequestHandler} from 'express'

export type HandlerRouteMatcher = {
  method: 'all' | 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head'
  route: string
  middlewares?: Array<RequestHandler>
  handler: RequestHandler
}

export type PointCloud = {
  id: number
  name: string
  url: string
}

export type Point3D = { x: number, y: number, z: number }

export type ClosestAlgoType = 'bf' | 'tree'

export type CloudJson = {
  numpts: number,
  points: Array<Point3D>
}

export type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never

export type ImPoint = { re: number, im: number }

export type Matrix4 = [
  [ ImPoint, ImPoint, ImPoint, ImPoint ],
  [ ImPoint, ImPoint, ImPoint, ImPoint ],
  [ ImPoint, ImPoint, ImPoint, ImPoint ],
  [ ImPoint, ImPoint, ImPoint, ImPoint ],
]