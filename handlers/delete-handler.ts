import { RequestHandler } from 'express'
import serviceContext from '../service-context'

const handler: RequestHandler = (req, res) => {
  const pointCloudService = serviceContext.get('PointCloudService')
  pointCloudService.deletePointCloud(Number(req.params.id))

  return res.status(200).json({ message: 'Point cloud deleted' })
}

export default handler
