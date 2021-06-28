import { RequestHandler } from 'express'

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
