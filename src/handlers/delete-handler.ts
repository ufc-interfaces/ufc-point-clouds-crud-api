import { RequestHandler } from 'express'
import serviceContext from '../service-context'

const handler: RequestHandler = (req, res) => {
  const pointCloudRestService = serviceContext.get('PointCloudRestService')
  pointCloudRestService.deletePointCloud(Number(req.params.id))

  return res.status(200).json({ message: 'Point cloud deleted' })
}

export default handler
