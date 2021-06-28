// import fs from 'fs'
import serviceContext from '../service-context'
import PointCloudRestService from "./point-cloud-rest-service"
import {Point3D} from "../@types/common";
import pontu from 'pontu-module'

type CloudJson = {
  numpts: number,
  points: Array<Point3D>
}

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
    //
    // fs.writeFileSync(process.cwd() + cloud.url, JSON.stringify(json));

    return cloud
  }
}