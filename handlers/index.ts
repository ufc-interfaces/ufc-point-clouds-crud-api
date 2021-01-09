import {default as createHandler} from './create-handler'
import {default as indexHandler} from './index-handler'
import {default as getAllHandler} from './get-all-handler'
import {HandlerRouteMatcher} from '../types'
import * as validators from './request-validators'
import multer from 'multer'

const storage = multer.diskStorage(
  {
    destination: './uploads/',
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  }
)

const upload = multer({ storage })

const routeMap: Array<HandlerRouteMatcher> = [
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
    method: 'post',
    middlewares: [...validators.createValidator, upload.single('file')],
    route: '/api/point-clouds',
    handler: createHandler
  },
]

export default routeMap
