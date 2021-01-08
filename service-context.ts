import { createContext, singleton } from 'servicemanager'
import PointCloudService from './services/point-cloud-service'

const context = createContext(
  [ 'PointCloudService', singleton(new PointCloudService()) ]
)

export default context