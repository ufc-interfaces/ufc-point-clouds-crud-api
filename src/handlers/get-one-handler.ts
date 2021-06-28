import { RequestHandler } from 'express'

const handler: RequestHandler = (req, res) => {
  return res.status(200).json(res.locals.cloud)
}

export default handler
