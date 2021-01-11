import { PointCloud } from '../types'
import fs from 'fs'

const filesDir = `${process.env.PWD}/data`

export default class PointCloudService {
  createPointCloud(cloud: Omit<PointCloud, 'id' | 'url'>, file: Express.Multer.File) {
    const dataStr = fs.readFileSync(`${filesDir}/data.json`, { flag: 'a+' }).toString();
    let data = dataStr && JSON.parse(dataStr)

    if (!Array.isArray(data)) {
      data = []
    }

    const lastId = Math.max(...data.map((item: PointCloud) => Number(item.id)).filter(Boolean))

    data.push({
      id: lastId + 1,
      name: cloud.name,
      url: `/uploads/${file.filename}`,
    })

    fs.writeFileSync(`${filesDir}/data.json`, JSON.stringify(data))
  }

  getAll() {
    const dataStr = fs.readFileSync(`${filesDir}/data.json`, { flag: 'a+' }).toString();
    let data = dataStr && JSON.parse(dataStr)

    if (!Array.isArray(data)) {
      data = []
    }

    return data
  }

  updatePointCloud(data: Partial<PointCloud> & { id: number }) {
    // TODO
    console.log('Oh, this is supposed to update a cloud.')
  }

  deletePointCloud(id: number) {
    // TODO
    console.log('Oh, this is supposed to delete a cloud.')
  }
}