import { RequestHandler } from 'express'
import serviceContext from '../service-context'

const handler: RequestHandler = (req, res) => {
  const pointCloudRestService = serviceContext.get('PointCloudRestService');

  return res.status(201).json(pointCloudRestService.getAll())
}

export default handler
