import { RequestHandler } from 'express'
import serviceContext from '../service-context'

const handler: RequestHandler = (req, res) => {
  const pointCloudService = serviceContext.get('PointCloudService')
  const updatedCloud = pointCloudService.updatePointCloud(Number(req.params.id), req.body)

  return res.status(200).json(updatedCloud)
}

export default handler
