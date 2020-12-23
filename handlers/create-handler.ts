import { RequestHandler } from 'express'

const handler: RequestHandler = (req, res) => {
  return res.status(201).send()
}

export default handler
