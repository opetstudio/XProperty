// a library to wrap and simplify api calls
import AppConfig from '../../Config/AppConfig'
import { generateHmac } from '../../Lib/Utils'

const publicapiKeyB64 = 'eG5kX3B1YmxpY19kZXZlbG9wbWVudF9mSXQyMXBRNWJmeThDbXBRdnNUcjZHSjlNalBPYnROeFc2ZkVlZ3FnaUxUdnNJNXVENDc5TlFmU3ZzeWNFSTo='
const apiKeyB64 = 'eG5kX2RldmVsb3BtZW50X3QwSFpwUmE4RlNoVktleFVaOEVLTjVNRzlLTmtYMnlMTXZ6ZERRUExBc3BTUHhjNVNRTnNRQnRJb3ZwejM6'
export const create = api => ({
  paymentFormSubmit: (data, opt) => {
    api.setHeader('Authorization', 'Basic ' + publicapiKeyB64)
    const body = { is_single_use: false, card_data: { account_number: data.cardNo, exp_month: data.expMonth, exp_year: data.expYear }, should_authenticate: true, amount: data.amount }
    const resp = api.post(`/credit_card_tokens/${opt.tokenId}/authentications`, body)
    // const resp = api.post('/v2/credit_card_tokens', body)
    return resp
  },
  paymentAuth: (data, opt) => {
    api.setHeader('Authorization', 'Basic ' + publicapiKeyB64)
    const body = { amount: data.amount }
    const resp = api.post('/credit_card_tokens/' + data.tokenId + '/authentications', body)
    return resp
  }
})
