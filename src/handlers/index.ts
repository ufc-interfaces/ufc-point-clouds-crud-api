import { default as createHandler } from './create-handler'
import { default as indexHandler } from './index-handler'
import { default as getAllHandler } from './get-all-handler'
import { default as getOneHandler } from './get-one-handler'
import { default as deleteHandler } from './delete-handler'
import { default as updateHandler } from './update-handler'
import { default as overrideFromJsonHandler } from './override-from-json-handler'
import * as validators from './request-validators'
import multer from 'multer'
import { RequestHandler } from "express";
import {overrideFromJsonValidator} from "./request-validators";

const storage = multer.diskStorage(
  {
    destination: './uploads/',
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  }
)

const upload = multer({ storage })

type HandlerRouteMatcher = {
  method: 'all' | 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head'
  route: string
  middlewares?: Array<RequestHandler>
  handler: RequestHandler
}

const routeMap: Array<HandlerRouteMatcher> = [
  // Rest calls
  {
    method: 'get',
    route: '/',
    handler: indexHandler
  },
  {
    method: 'get',
    route: '/api/point-clouds',
    handler: getAllHandler
  },
  {
    method: 'get',
    middlewares: [validators.cloudValidator],
    route: '/api/point-clouds/:id',
    handler: getOneHandler
  },
  {
    method: 'post',
    middlewares: [upload.single('file'), ...validators.createValidator],
    route: '/api/point-clouds',
    handler: createHandler
  },
  {
    method: 'delete',
    middlewares: [validators.cloudValidator],
    route: '/api/point-clouds/:id',
    handler: deleteHandler
  },
  {
    method: 'patch',
    middlewares: [multer().none(), validators.cloudValidator],
    route: '/api/point-clouds/:id',
    handler: updateHandler
  },

  // Other
  {
    method: 'post',
    middlewares: [multer().none(), ...validators.overrideFromJsonValidator],
    route: '/api/point-clouds/override-from-json/:id',
    handler: overrideFromJsonHandler
  },
]

export default routeMap
