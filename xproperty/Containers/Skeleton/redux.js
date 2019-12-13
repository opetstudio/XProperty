import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import _ from 'lodash'

const { Types, Creators } = createActions({
  projectFetchAll: ['data'],
  reset: null
})

export const ProjectTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  projectFetchAllMSG: { ir: false, rc: '', rs: '', rd: '' },
  version: 0,
  projectById: {}
})

export const ProjectSelectors = {
  projectFetchAllMSG: st => st.projectFetchAllMSG,
  projectById: st => st.projectById,
  getAllProjectArr: st => _.map(st.projectById, (r) => r),
  getProjectById: (st, id) => st.projectById[id],
  version: st => st.version
}
export const projectFetchAll = (state, { data }) => {
  return projectPatch(state, { data: { ...data, projectFetchAllMSG: { ir: true, rc: '', rs: '', rd: '' } } })
}

export const projectPatch = (state, { data }) => {
  const mergeData = {}
  if ('projectFetchAllMSG' in data) mergeData.projectFetchAllMSG = data.projectFetchAllMSG
  if ('projectById' in data) mergeData.projectById = data.projectById
  mergeData.version = state.version + 1
  return state.merge(mergeData)
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PROJECT_FETCH_ALL]: projectFetchAll,
  [Types.RESET]: (state) => INITIAL_STATE
})
