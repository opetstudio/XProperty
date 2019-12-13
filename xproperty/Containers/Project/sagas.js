import { call, put, select } from 'redux-saga/effects'
import Immutable from 'seamless-immutable'
import SessionActions, { SessionSelectors } from '../../Redux/SessionRedux'
import ProjectActions from './redux'
import { path } from 'ramda'
import { transResponse, transResponseGetDetail } from '../../Transforms/TransformAttributes'

export const projectCurrentData = state => ({
  projectById: state.project.projectById
})
export function * projectFetchAll (api, action) {
  const { data } = action
  const resp = yield call(api.projectFetchAll, data)
  console.log('response ===> ', resp)
  const response = transResponse(resp)
  console.log('trans response ===> ', response)
  let projectFetchAllMSG = { ir: false, rc: path(['data', 'responseCode'], response), rm: path(['data', 'responseMessage'], response), rd: path(['data', 'responseDescription'], response) }
  if (!response.ok) {
    if (response.status === 400) {
      const message = path(['data', 'message'], response)
      projectFetchAllMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: message }
    } else projectFetchAllMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: response.problem }
    yield put(ProjectActions.projectPatch({ projectFetchAllMSG }))
  } else {
    const projectById = path(['data', 'rowsById'], response)
    yield put(ProjectActions.projectPatch({ projectFetchAllMSG, projectById }))
  }
}
export function * projectFetchOne (api, action) {
  const { data } = action
  const currentData = yield select(projectCurrentData)
  const resp = yield call(api.projectFetchOne, data)
  console.log('response ===> ', resp)
  const response = transResponseGetDetail(resp)
  console.log('trans response ===> ', response)
  let projectFetchOneMSG = { ir: false, rc: path(['data', 'responseCode'], response), rm: path(['data', 'responseMessage'], response), rd: path(['data', 'responseDescription'], response) }
  if (!response.ok) {
    if (response.status === 400) {
      const message = path(['data', 'message'], response)
      projectFetchOneMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: message }
    } else projectFetchOneMSG = { ir: false, rc: '99', rm: 'FAILED_SYSTEM', rd: response.problem }
    yield put(ProjectActions.projectPatch({ projectFetchOneMSG }))
  } else {
    const row = path(['data', 'row'], response)
    yield put(ProjectActions.projectPatch({ projectFetchOneMSG, projectById: { ...currentData.projectById, [row.id]: row } }))
  }
}
