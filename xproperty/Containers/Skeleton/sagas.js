import { call, put, select } from 'redux-saga/effects'
import Immutable from 'seamless-immutable'
import SessionActions, { SessionSelectors } from '../../Redux/SessionRedux'
import ProjectActions from './redux'
import { is, path } from 'ramda'
import { generateSha256 } from '../../Lib/Utils'
import { setResponse } from '../../Transforms/TransformAttributes'

export function * projectFetchAll (api, action) {
  const { data } = action
  const resp = yield call(api.projectFetchAll, data)
  console.log('response ===> ', resp)
  const response = setResponse(resp)
  let projectFetchAllMSG = { ir: false, rc: path(['data', 'responseCode'], response), rm: path(['data', 'responseMessage'], response), rd: path(['data', 'responseDescription'], response) }
  if (!response.ok) {
    if (response.status === 400) {
      const message = path(['data', 'message'], response)
      projectFetchAllMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: message }
    } else projectFetchAllMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: response.problem }
    yield put(ProjectActions.paymentPatch({ projectFetchAllMSG }))
  } else {
    const projectById = path(['data', 'rows'], response)
    yield put(ProjectActions.paymentPatch({ projectFetchAllMSG, projectById }))
  }
}
