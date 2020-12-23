import { RequestHandler } from 'express'
import { ENVIRONMENT } from '../config'

const handler: RequestHandler = (req, res) => {
  if (ENVIRONMENT !== 'development') {
    return res.status(403).send('Forbidden')
  }

  return res.send('API up and running')
}

export default handler
