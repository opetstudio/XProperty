import AppConfig from '../../Config/AppConfig'
import { generateHmac } from '../../Lib/Utils'

export const create = api => ({
  projectFetchOne: (data, opt) => {
    api.setHeader('Authorization', 'Basic ')
    const body = {}
    const resp = api.post('/projectFetchOne', body)
    return resp
  },
  projectFetchAll: (data, opt) => {
    api.setHeader('Authorization', 'Basic ')
    const body = {}
    const resp = api.post('/projectFetchAll', body)
    return resp
  }
})
