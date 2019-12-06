import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'
import AppConfig from '../Config/AppConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { WebsocketTypes } from '../Redux/WebsocketRedux'
import { SessionTypes } from '../Redux/SessionRedux'
import { SignupTypes } from '../Containers/Signup/redux'
import { PaymentTypes } from '../Containers/Payment/redux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { websocketSetup } from './WebsocketSagas'
import { sessionLogin, sessionLogout } from './SessionSagas'
import { signupFormSubmit } from '../Containers/Signup/sagas'
import { paymentFormSubmit, paymentAuth, paymentCheck } from '../Containers/Payment/sagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()
// const hostBackend = AppConfig.env === 'development' ? 'http://localhost:8762' : 'https://api.erevnaraya.com'
const apiDashboard = DebugConfig.useFixtures ? FixtureAPI : API.create(AppConfig.backendHost + '/dashboard-api/')
const apiDashboardPy = DebugConfig.useFixtures ? FixtureAPI : API.create(AppConfig.backendHost + '/dashboard-api/py/')
const xenditApi = API.create('https://api.xendit.co/')

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(WebsocketTypes.WEBSOCKET_SETUP, websocketSetup),
    takeLatest(SessionTypes.SESSION_LOGIN, sessionLogin, apiDashboard),
    takeLatest(SessionTypes.SESSION_LOGOUT, sessionLogout, apiDashboard),
    takeLatest(SignupTypes.SIGNUP_FORM_SUBMIT, signupFormSubmit, apiDashboard),
    takeLatest(PaymentTypes.PAYMENT_FORM_SUBMIT, paymentFormSubmit, xenditApi),
    takeLatest(PaymentTypes.PAYMENT_AUTH, paymentAuth, xenditApi),
    takeLatest(PaymentTypes.PAYMENT_CHECK, paymentCheck, xenditApi)
  ])
}
