import path from 'path'
import { PointCloud } from '../types'
import fs from 'fs'

const filesDir = path.resolve('./data')

export default class PointCloudService {
  createPointCloud(cloud: Omit<PointCloud, 'id' | 'url'>, file: Express.Multer.File) {
    const dataStr = fs.readFileSync(`${filesDir}/data.json`, { flag: 'a+' }).toString();
    let data = dataStr && JSON.parse(dataStr)

    if (!Array.isArray(data)) {
      data = []
    }

    const lastId = Math.max(...data.map((item: PointCloud) => Number(item.id)), 0)
    const newCloud = {
      id: String(lastId + 1),
      name: cloud.name,
      url: `/uploads/${file.filename}`,
    }

    data.push(newCloud)

    fs.writeFileSync(`${filesDir}/data.json`, JSON.stringify(data))

    return newCloud
  }

  getAll(): Array<PointCloud> {
    const dataStr = fs.readFileSync(`${filesDir}/data.json`, { flag: 'a+' }).toString();
    let data = dataStr && JSON.parse(dataStr)

    if (!Array.isArray(data)) {
      data = []
    }

    return data
  }

  getOne(id: number): PointCloud | null {
    const data = this.getAll()
    return data.find(cloud => Number(cloud.id) === Number(id)) || null
  }

  updatePointCloud(id: number, partialCloud: Partial<PointCloud>) {
    const updatedCloud = this.getOne(id);

    if (!updatedCloud) {
      throw `Cloud with id "${id}" not found while trying to update`
    }

    if (!partialCloud || partialCloud === {}) {
      throw 'No data provided to update the target cloud'
    }

    const validKeys = (Object.keys(updatedCloud) as Array<keyof typeof updatedCloud>).filter(key => key !== 'id')

    validKeys.forEach(key => {
      if (partialCloud[key] !== undefined) {
        Object.assign(updatedCloud, { [key]: partialCloud[key] })
      }
    })

    const newData = this.getAll().map(
      cloud => String(cloud.id) === String(updatedCloud.id) ? updatedCloud : cloud
    )

    fs.writeFileSync(`${filesDir}/data.json`, JSON.stringify(newData))

    return updatedCloud
  }

  deletePointCloud(id: number) {
    const dataStr = fs.readFileSync(`${filesDir}/data.json`, { flag: 'a+' }).toString();
    let data = dataStr && JSON.parse(dataStr)

    if (!Array.isArray(data)) {
      data = []
    }

    const newData = data.filter((item: PointCloud) => Number(item.id) !== Number(id))

    fs.writeFileSync(`${filesDir}/data.json`, JSON.stringify(newData))
  }
}