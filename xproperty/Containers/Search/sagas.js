import { call, put, select } from 'redux-saga/effects'
import Immutable from 'seamless-immutable'
import SessionActions, { SessionSelectors } from '../../Redux/SessionRedux'
import SearchActions from './redux'
import { is, path } from 'ramda'
import { generateSha256 } from '../../Lib/Utils'
import { setResponse } from '../../Transforms/TransformAttributes'

export function * searchFetchAll (api, action) {
  const { data } = action
  const resp = yield call(api.searchFetchAll, data)
  console.log('response ===> ', resp)
  const response = setResponse(resp)
  let searchFetchAllMSG = { ir: false, rc: path(['data', 'responseCode'], response), rm: path(['data', 'responseMessage'], response), rd: path(['data', 'responseDescription'], response) }
  if (!response.ok) {
    if (response.status === 400) {
      const message = path(['data', 'message'], response)
      searchFetchAllMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: message }
    } else searchFetchAllMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: response.problem }
    yield put(SearchActions.paymentPatch({ searchFetchAllMSG }))
  } else {
    const searchById = path(['data', 'rows'], response)
    yield put(SearchActions.paymentPatch({ searchFetchAllMSG, searchById }))
  }
}
