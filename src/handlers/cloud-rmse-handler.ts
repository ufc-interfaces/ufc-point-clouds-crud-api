import { RequestHandler } from 'express'
import PointCloudPontuService from '../services/point-cloud-pontu-service'
import { ArgumentTypes } from "../@types/common";

const handler: RequestHandler = (req, res) => {
  const pointCloudPontuService = new PointCloudPontuService() // todo: add to container

  const rmseArgs = [
    req.body?.srcCloud || req.body?.source,
    req.body?.tgtCloud || req.body?.target,
    req.body?.max_dist || req.body?.maxDist,
    req.body?.closest_type || req.body?.closestType
  ] as ArgumentTypes<typeof pointCloudPontuService.cloudRMSE>

  if (rmseArgs.some(rmseArg => !rmseArg)) {
    return res.status(422).json({ error: 'Invalid request params' })
  }

  // todo: do this in a request validator
  if (!['bf', 'tree'].includes(rmseArgs[3])) {
    return res.status(422).json({ error: "Invalid 'closestType' param. Use 'bf' or 'tree' as value." })
  }

  const result = pointCloudPontuService.cloudRMSE(...rmseArgs)

  return res.status(200).json({ rsme: result })
}

export default handler
