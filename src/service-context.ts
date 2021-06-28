import {createContext, factory, singleton} from 'servicemanager'
import PointCloudRestService from './services/point-cloud-rest-service'

const context = createContext(
  ['PointCloudRestService', factory(new PointCloudRestService()) ],
)

export default context