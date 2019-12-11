import { call, put, select } from 'redux-saga/effects'
import Immutable from 'seamless-immutable'
import SessionActions, { SessionSelectors } from '../../Redux/SessionRedux'
import BookingActions from './redux'
import { is, path } from 'ramda'
import { generateSha256 } from '../../Lib/Utils'
import { setResponse } from '../../Transforms/TransformAttributes'

export function * bookingFetchAll (api, action) {
  const { data } = action
  const resp = yield call(api.bookingFetchAll, data)
  console.log('response ===> ', resp)
  const response = setResponse(resp)
  let bookingFetchAllMSG = { ir: false, rc: path(['data', 'responseCode'], response), rm: path(['data', 'responseMessage'], response), rd: path(['data', 'responseDescription'], response) }
  if (!response.ok) {
    if (response.status === 400) {
      const message = path(['data', 'message'], response)
      bookingFetchAllMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: message }
    } else bookingFetchAllMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: response.problem }
    yield put(BookingActions.paymentPatch({ bookingFetchAllMSG }))
  } else {
    const bookingById = path(['data', 'rows'], response)
    yield put(BookingActions.paymentPatch({ bookingFetchAllMSG, bookingById }))
  }
}
