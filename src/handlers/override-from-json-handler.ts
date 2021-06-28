import { RequestHandler } from 'express'
import PointCloudPontuService from '../services/point-cloud-pontu-service'

const handler: RequestHandler = (req, res) => {
  const pointCloudPontuService = new PointCloudPontuService() // todo: add to container
  const overriddenCloud = pointCloudPontuService.overrideFromJson(Number(req.params.id), req.body?.json)

  return res.status(200).json(overriddenCloud)
}

export default handler
