import serviceContext from '../service-context'
import PointCloudRestService from "./point-cloud-rest-service"
import { ClosestAlgoType, CloudJson } from "../@types/common";
import pontu from 'pontu-module'

const isValidCloudJson = (json: any) => {
  return typeof json?.numpts === 'number' && json?.points instanceof Array
}

export default class PointCloudPontuService {
  private pointCloudRestService: PointCloudRestService;

  constructor() {
    this.pointCloudRestService = serviceContext.get('PointCloudRestService')
  }

  overrideFromJson(id: number, json: CloudJson) {
    const cloud = this.pointCloudRestService.getOne(id);

    if (!cloud) {
      throw `Cloud with id "${id}" not found`
    }

    if (!isValidCloudJson(json)) {
      throw `Invalid json format. Please use format: { numpts: number, points: Array<{x: number, y: number, z: number}> }`
    }

    pontu.cloud_save_sync(json, process.cwd() + cloud.url)

    return cloud
  }

  registrationICP(
    source: CloudJson,
    target: CloudJson,
    th: number,
    k: number,
    maxDist: number,
    closestType: ClosestAlgoType,
  ) {
    return pontu.registration_icp_sync(source, target, th, k, maxDist, closestType);
  }

  cloudRMSE(
    source: CloudJson,
    target: CloudJson,
    maxDist: number,
    closestType: ClosestAlgoType,
  ) {
    return pontu.cloud_rmse(source, target, maxDist, closestType);
  }
}
