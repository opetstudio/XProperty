import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import _ from 'lodash'

const { Types, Creators } = createActions({
  searchFetchAll: ['data'],
  searchPatch: ['data'],
  reset: null
})

export const SearchTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  searchFetchAllMSG: { ir: false, rc: '', rs: '', rd: '' },
  searchHistoryStringById: {},
  version: 0,
  searchById: {}
})

export const SearchSelectors = {
  searchFetchAllMSG: st => st.searchFetchAllMSG,
  searchHistoryStringById: st => st.searchHistoryStringById,
  getSearchHistoryStringById: (st, id) => st.searchHistoryStringById[id],
  getAllSearchHistoryStringArr: st => _.map(st.searchHistoryStringById, (r) => r),
  searchById: st => st.searchById,
  getAllSearchArr: st => _.map(st.searchById, (r) => r),
  getSearchById: (st, id) => st.searchById[id],
  version: st => st.version
}
export const searchFetchAll = (state, { data }) => {
  return searchPatch(state, { data: { ...data, searchFetchAllMSG: { ir: true, rc: '', rs: '', rd: '' } } })
}

export const searchPatch = (state, { data }) => {
  const mergeData = {}
  if ('searchFetchAllMSG' in data) mergeData.searchFetchAllMSG = data.searchFetchAllMSG
  if ('searchById' in data) mergeData.searchById = data.searchById
  if ('searchHistoryStringById' in data) mergeData.searchHistoryStringById = data.searchHistoryStringById
  mergeData.version = state.version + 1
  return state.merge(mergeData)
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_FETCH_ALL]: searchFetchAll,
  [Types.SEARCH_PATCH]: searchPatch,
  [Types.RESET]: (state) => INITIAL_STATE
})
