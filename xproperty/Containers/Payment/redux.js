import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import _ from 'lodash'

const { Types, Creators } = createActions({
  paymentFormSubmit: ['data'],
  paymentPatch: ['data'],
  paymentAuth: ['data'],
  paymentCheck: ['data'],
  reset: null
})

export const PaymentTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  version: 0,
  paymentFormSubmitMSG: { ir: false, rc: '', rs: '', rd: '' },
  paymentAuthMSG: { ir: false, rc: '', rs: '', rd: '' },
  paymentCheckMSG: { ir: false, rc: '', rs: '', rd: '' },
  tokenId: null,
  maskedCardNo: null,
  authId: null,
  amount: 0,
  externalId: null,
  creditCard: [{
    maskedCardNo: '400000XXXXXX0002',
    expMonth: '12',
    expYear: '2020',
    tokenId: '5de06f7f7a548937f103e5e6'
  }],
  tokenById: {},
  apiKey: 'xnd_development_t0HZpRa8FShVKexUZ8EKN5MG9KNkX2yLMvzdDQPLAspSPxc5SQNsQBtIovpz3:',
  publicApiKey: 'xnd_public_development_fIt21pQ5bfy8CmpQvsTr6GJ9MjPObtNxW6fEegqgiLTvsI5uD479NQfSvsycEI:',
  modalVisible: false,
  payerAuthenticationUrl: null
})

export const PaymentSelectors = {
  paymentFormSubmitMSG: st => st.paymentFormSubmitMSG,
  paymentAuthMSG: st => st.paymentAuthMSG,
  paymentCheckMSG: st => st.paymentCheckMSG,
  tokenId: st => st.tokenId,

  tokenById: st => st.tokenById,
  getAllTokenArr: st => _.map(st.tokenById, (r) => r),
  getTokenById: (st, id) => st.tokenById[id],

  maskedCardNo: st => st.maskedCardNo,
  authId: st => st.authId,
  amount: st => st.amount,
  externalId: st => st.externalId,
  apiKey: st => st.apiKey,
  publicApiKey: st => st.publicApiKey,
  creditCard: st => st.creditCard,
  modalVisible: st => st.modalVisible,
  payerAuthenticationUrl: st => st.payerAuthenticationUrl,
  version: st => st.version
}
export const paymentFormSubmit = (state, { data }) => {
  data.paymentFormSubmitMSG = { ir: true, rc: '', rs: '', rd: '' }
  return paymentPatch(state, { data })
}
export const paymentAuth = (state, { data }) => {
  data.paymentAuthMSG = { ir: true, rc: '', rs: '', rd: '' }
  return paymentPatch(state, { data })
}
export const paymentCheck = (state, { data }) => {
  data.paymentCheckMSG = { ir: true, rc: '', rs: '', rd: '' }
  return paymentPatch(state, { data })
}

export const paymentPatch = (state, { data }) => {
  const mergeData = {}
  if (data.hasOwnProperty('paymentFormSubmitMSG')) mergeData.paymentFormSubmitMSG = data.paymentFormSubmitMSG
  if (data.hasOwnProperty('paymentAuthMSG')) mergeData.paymentAuthMSG = data.paymentAuthMSG
  if (data.hasOwnProperty('paymentCheckMSG')) mergeData.paymentCheckMSG = data.paymentCheckMSG
  if (data.hasOwnProperty('tokenId')) mergeData.tokenId = data.tokenId
  if (data.hasOwnProperty('authId')) mergeData.authId = data.authId
  if (data.hasOwnProperty('amount')) mergeData.amount = data.amount
  if (data.hasOwnProperty('externalId')) mergeData.externalId = data.externalId
  if (data.hasOwnProperty('creditCard')) mergeData.creditCard = data.creditCard
  if (data.hasOwnProperty('modalVisible')) mergeData.modalVisible = data.modalVisible
  if (data.hasOwnProperty('payerAuthenticationUrl')) mergeData.payerAuthenticationUrl = data.payerAuthenticationUrl
  if (data.hasOwnProperty('tokenById')) mergeData.tokenById = data.tokenById
  mergeData.version = state.version + 1
  return state.merge(mergeData)
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PAYMENT_FORM_SUBMIT]: paymentFormSubmit,
  [Types.PAYMENT_AUTH]: paymentAuth,
  [Types.PAYMENT_CHECK]: paymentCheck,
  [Types.PAYMENT_PATCH]: paymentPatch,
  [Types.RESET]: (state) => INITIAL_STATE
})
