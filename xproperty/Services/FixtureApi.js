export default {
  // Functions return fixtures
  getRoot: () => {
    return {
      ok: true,
      data: require('../Fixtures/root.json')
    }
  },
  getRate: () => {
    return {
      ok: true,
      data: require('../Fixtures/rateLimit.json')
    }
  },
  getUser: (username) => {
    // This fixture only supports gantman or else returns skellock
    const gantmanData = require('../Fixtures/gantman.json')
    const skellockData = require('../Fixtures/skellock.json')
    return {
      ok: true,
      data: username.toLowerCase() === 'gantman' ? gantmanData : skellockData
    }
  },
  sessionLogin: (data) => {
    return {
      ok: true,
      data: require('../Fixtures/sessionLogin.json')
    }
  },
  sessionLogout: (data) => {
    return {
      ok: true,
      data: require('../Fixtures/sessionLogout.json')
    }
  },
  otpvalidationFormSubmit: (data) => {
    return {
      ok: true,
      data: {
        responseCode: '00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS'
      }
    }
  },
  addcardFormSubmit: (data) => {
    return {
      ok: true,
      data: {
        responseCode: '00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS'
      }
    }
  },
  signupFormSubmit: (data) => {
    return {
      ok: true,
      data: {
        responseCode: '00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS'
      }
    }
  },
  paymentFormSubmit: (data) => {
    return {
      ok: true,
      data: {
        responseCode: '00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS'
      }
    }
  },
  projectFetchAll: (data) => {
    return {
      ok: true,
      data: {
        responseCode: '00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS',
        rows: [
          { id: 1, title: 'Township Development', location: 'Menteng, Jakarta Selatan', picture: 'https://www.modernland.co.id/uploads/default/files/067a2fc4df55d90f2180651d02e9f859.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
          { id: 2, title: 'Residential Development', location: 'Menteng, Jakarta Selatan', picture: 'https://www.modernland.co.id/uploads/default/files/067a2fc4df55d90f2180651d02e9f859.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
          { id: 3, title: 'Industrial Town Development', location: 'Menteng, Jakarta Selatan', picture: 'https://www.modernland.co.id/uploads/default/files/067a2fc4df55d90f2180651d02e9f859.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
          { id: 4, title: 'Hospitality & Commercial', location: 'Menteng, Jakarta Selatan', picture: 'https://www.modernland.co.id/uploads/default/files/067a2fc4df55d90f2180651d02e9f859.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
        ]
      }
    }
  },
  projectFetchOne: (data) => {
    return {
      ok: true,
      data: {
        responseCode: '00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS',
        row: { id: 1, title: 'Project 1 Nofrets', location: 'Menteng, Jakarta Selatannnn', picture: 'https://www.modernland.co.id/uploads/default/files/067a2fc4df55d90f2180651d02e9f859.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
      }
    }
  }
}
