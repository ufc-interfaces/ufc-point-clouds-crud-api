import { RequestHandler } from 'express'
import { validationResult } from 'express-validator'

const handler: RequestHandler = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  return res.status(201).send()
}

export default handler
