import { PointCloud } from '../types'

export default class PointCloudService {
  createPointCloud(data: Omit<PointCloud, 'id'>) {
    // TODO
    console.log('Oh, this is supposed to register a cloud.')
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