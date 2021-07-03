import { RequestHandler } from 'express'
import PointCloudPontuService from '../services/point-cloud-pontu-service'
import { ArgumentTypes } from "../@types/common";

const handler: RequestHandler = (req, res) => {
  const pointCloudPontuService = new PointCloudPontuService() // todo: add to container

  const icpArgs = [
    req.body?.srcCloud || req.body?.source,
    req.body?.tgtCloud || req.body?.target,
    req.body?.th,
    req.body?.k,
    req.body?.max_dist || req.body?.maxDist,
    req.body?.closest_type || req.body?.closestType
  ] as ArgumentTypes<typeof pointCloudPontuService.registrationICP>

  if (icpArgs.some(icpArg => !icpArg)) {
    return res.status(422).json({ error: 'Invalid request params' })
  }

  // todo: do this in a request validator
  if (!['bf', 'tree'].includes(icpArgs[5])) {
    return res.status(422).json({ error: "Invalid 'closestType' param" })
  }

  const registrationResult = pointCloudPontuService.registrationICP(...icpArgs)

  return res.status(200).json(registrationResult)
}

export default handler
