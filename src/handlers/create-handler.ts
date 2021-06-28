import { RequestHandler } from 'express'
import { validationResult } from 'express-validator'
import serviceContext from '../service-context'

const handler: RequestHandler = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const pointCloudRestService = serviceContext.get('PointCloudRestService');

  const cloud = pointCloudRestService.createPointCloud(req.body, req.file);

  return res.status(201).json(cloud)
}

export default handler
