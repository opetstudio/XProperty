import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  signupFormSubmit: ['data'],
  signupPatch: ['data'],
  reset: null
})

export const SignupTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  version: 0,
  signupFormSubmitMSG: { ir: false, rc: '', rs: '', rd: '' }
})

export const SignupSelectors = {
  signupFormSubmitMSG: st => st.signupFormSubmitMSG,
  version: st => st.version
}
export const signupFormSubmit = (state, { data }) => {
  data.signupFormSubmitMSG = { ir: true, rc: '', rs: '', rd: '' }
  return signupPatch(state, { data })
}

export const signupPatch = (state, { data }) => {
  const mergeData = {}
  if (data.hasOwnProperty('signupFormSubmitMSG')) mergeData.signupFormSubmitMSG = data.signupFormSubmitMSG
  mergeData.version = state.version + 1
  return state.merge(mergeData)
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGNUP_FORM_SUBMIT]: signupFormSubmit,
  [Types.SIGNUP_PATCH]: signupPatch,
  [Types.RESET]: (state) => INITIAL_STATE
})
