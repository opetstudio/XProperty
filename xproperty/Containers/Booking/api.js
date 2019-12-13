import AppConfig from '../../Config/AppConfig'
import { generateHmac } from '../../Lib/Utils'

export const create = api => ({
  bookingFetchAll: (data, opt) => {
    api.setHeader('Authorization', 'Basic ')
    const body = {}
    const resp = api.post('/bookingFetchAll', body)
    return resp
  }
})
