import { RequestHandler } from 'express'
import serviceContext from '../service-context'

const handler: RequestHandler = (req, res) => {
  const id = Number(req.params.id)

  if (!id) {
    return res.status(422).json({ errors: ['Invalid id route param'] });
  }

  const pointCloudService = serviceContext.get('PointCloudService')
  const cloud = pointCloudService.getOne(id)

  if (!cloud) {
    return res.status(404).json({ errors: ['Cloud not found'] })
  }

  pointCloudService.deletePointCloud(id)

  return res.status(200).json({ message: 'Point cloud deleted' })
}

export default handler
