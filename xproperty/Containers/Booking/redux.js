import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import _ from 'lodash'

const { Types, Creators } = createActions({
  bookingFetchAll: ['data'],
  bookingPatch: ['data'],
  reset: null
})

export const BookingTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  bookingFetchAllMSG: { ir: false, rc: '', rs: '', rd: '' },
  version: 0,
  bookingById: {},
  bookingForm: {}
})

export const BookingSelectors = {
  bookingFetchAllMSG: st => st.bookingFetchAllMSG,
  bookingById: st => st.bookingById,
  bookingForm: st => st.bookingForm,
  getAllBookingArr: st => _.map(st.bookingById, (r) => r),
  getBookingById: (st, id) => st.bookingById[id],
  version: st => st.version
}
export const bookingFetchAll = (state, { data }) => {
  return bookingPatch(state, { data: { ...data, bookingFetchAllMSG: { ir: true, rc: '', rs: '', rd: '' } } })
}

export const bookingPatch = (state, { data }) => {
  const mergeData = {}
  if ('bookingFetchAllMSG' in data) mergeData.bookingFetchAllMSG = data.bookingFetchAllMSG
  if ('bookingById' in data) mergeData.bookingById = data.bookingById
  if ('bookingForm' in data) mergeData.bookingForm = data.bookingForm
  mergeData.version = state.version + 1
  return state.merge(mergeData)
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BOOKING_FETCH_ALL]: bookingFetchAll,
  [Types.BOOKING_PATCH]: bookingPatch,
  [Types.RESET]: (state) => INITIAL_STATE
})
