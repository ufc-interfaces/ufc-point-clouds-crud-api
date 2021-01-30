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

  updatePointCloud(id: number, data: Partial<PointCloud>) {
    // TODO
    console.log('Oh, this is supposed to update a cloud.')
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