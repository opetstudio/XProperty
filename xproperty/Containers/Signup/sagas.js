import { call, put, select } from 'redux-saga/effects'
import SessionActions, { SessionSelectors } from '../../Redux/SessionRedux'
import SignupActions from './redux'
import { is, path } from 'ramda'

// process UPDAATE actions
export function * signupFormSubmit (api, action) {
  console.log('[signupFormSubmit] action=', action)
  const { data } = action
  const response = yield call(api.signupFormSubmit, data)
  console.log('response=', response)
  let signupFormSubmitMSG = { ir: false, rc: path(['data', 'responseCode'], response), rm: path(['data', 'responseMessage'], response), rd: path(['data', 'responseDescription'], response) }
  if (!response.ok) {
    signupFormSubmitMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: response.problem }
  }
  yield put(SignupActions.signupPatch({ signupFormSubmitMSG }))
}
