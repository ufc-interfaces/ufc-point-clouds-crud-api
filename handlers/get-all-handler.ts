import { RequestHandler } from 'express'
import serviceContext from '../service-context'

const handler: RequestHandler = (req, res) => {
  const pointCloudService = serviceContext.get('PointCloudService');

  return res.status(201).json(pointCloudService.getAll())
}

export default handler
