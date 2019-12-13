import { call, put, select } from 'redux-saga/effects'
import Immutable from 'seamless-immutable'
import SessionActions, { SessionSelectors } from '../../Redux/SessionRedux'
import PaymentActions from './redux'
import { is, path } from 'ramda'
import { generateSha256 } from '../../Lib/Utils'

export const paymentDt = state => ({
  tokenId: state.payment.tokenId,
  tokenById: state.payment.tokenById
})

export function * paymentCheck (api, action) {
  const { data } = action
  const response = yield call(api.paymentCheck, data)
  console.log('response ===> ', response)
  let paymentCheckMSG = { ir: false, rc: path(['data', 'responseCode'], response), rm: path(['data', 'responseMessage'], response), rd: path(['data', 'responseDescription'], response) }
  if (!response.ok) {
    if (response.status === 400) {
      const message = path(['data', 'message'], response)
      paymentCheckMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: message }
    } else paymentCheckMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: response.problem }
  } else {
    const status = path(['data', 'status'], response)
    const redirectUrl = path(['data', 'payer_authentication_url'], response)
  }
  yield put(PaymentActions.paymentPatch({ paymentCheckMSG }))
}

// process UPDAATE actions
export function * paymentAuth (api, action) {
  console.log('paymentAuth ====> action=', action)
  const { data } = action
  const response = yield call(api.paymentAuth, data)
  let authId = null
  let modalVisible = false
  let payerAuthenticationUrl = null
  console.log('response ===> ', response)
  let paymentAuthMSG = { ir: false, rc: path(['data', 'responseCode'], response), rm: path(['data', 'responseMessage'], response), rd: path(['data', 'responseDescription'], response) }
  if (!response.ok) {
    if (response.status === 400) {
      const message = path(['data', 'message'], response)
      paymentAuthMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: message }
    } else paymentAuthMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: response.problem }
  } else {
    const status = path(['data', 'status'], response)
    const redirectUrl = path(['data', 'payer_authentication_url'], response)
    authId = path(['data', 'id'], response)
    console.log('status====>', status)
    console.log('redirectUrl====>', redirectUrl)
    if (status === 'VERIFIED') {
      // Handle success
    } else if (status === 'IN_REVIEW') {
      // Handle authentication (3DS)
      console.log('redirect to ', redirectUrl)
      modalVisible = true
      payerAuthenticationUrl = redirectUrl
    } else if (status === 'FAILED') {
      // Handle failure
    }
  }
  yield put(PaymentActions.paymentPatch({ paymentAuthMSG, authId, modalVisible, payerAuthenticationUrl }))
}
export function * paymentFormSubmit (api, action) {
  console.log('[paymentFormSubmit] action=', action)
  const { data } = action
  const payData = yield select(paymentDt)
  const response = yield call(api.paymentFormSubmit, { amount: data.amount, cardNo: data.cardNo, expMonth: data.expMonth, expYear: data.expYear }, { tokenId: payData.tokenId })
  console.log('response=', response)
  let paymentFormSubmitMSG = { ir: false, rc: path(['data', 'responseCode'], response), rm: path(['data', 'responseMessage'], response), rd: path(['data', 'responseDescription'], response) }
  const tokenById = Immutable.asMutable(payData.tokenById, { deep: true })
  if (!response.ok) {
    if (response.status === 400) {
      const message = path(['data', 'message'], response)
      paymentFormSubmitMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: message }
    } else paymentFormSubmitMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: response.problem }
  } else {
    const status = path(['data', 'status'], response)
    const maskedCardNumber = path(['data', 'masked_card_number'], response)
    const tokenId = path(['data', 'id'], response)
    if (status === 'VERIFIED') {
      // Handle success
      const cardHash = generateSha256(data.cardNo)
      tokenById[cardHash] = { ...tokenById[cardHash] || {}, cardHash, maskedCardNumber, tokenId, expMonth: data.expMonth, expYear: data.expYear }
      // tokenById.merge({ [cardHash]: { cardHash, maskedCardNumber, tokenId } })
    } else if (status === 'IN_REVIEW') {
      // Handle authentication (3DS)
      // const tokenId = path(['data', 'id'], response)
      // const response2 = yield call(api.paymentAuth, { amount: data.amount, tokenId })
      // console.log('response2=', response2)
      // console.log('tokenId=', tokenId)
      // if (!response2.ok) {
      //   if (response.status === 400) {
      //     const message = path(['data', 'message'], response)
      //     paymentFormSubmitMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: message }
      //   } else paymentFormSubmitMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: response.problem }
      // } else {
      //   const redirectUrl = path(['data', 'payer_authentication_url'], response2)
        
      //   console.log('redirectUrl', redirectUrl)
      // }
    } else if (status === 'FAILED') {
      // Handle failure
    }
  }
  console.log('tokenById====>', tokenById)
  yield put(PaymentActions.paymentPatch({ paymentFormSubmitMSG, tokenById }))
}
