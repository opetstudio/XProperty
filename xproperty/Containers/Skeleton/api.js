import AppConfig from '../../Config/AppConfig'
import { generateHmac } from '../../Lib/Utils'

export const create = api => ({
  projectFetchAll: (data, opt) => {
    api.setHeader('Authorization', 'Basic ')
    const body = {}
    const resp = api.post('/projectFetchAll', body)
    return resp
  }
})
