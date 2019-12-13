import Moment from 'moment'
import { merge, path, isEmpty, isNil } from 'ramda'
import {
  AsyncStorage, Platform, StatusBar, Alert, Linking
} from 'react-native'
import InAppBrowser from 'react-native-inappbrowser-reborn'
import AppConfig from '../Config/AppConfig'

var AES = require('crypto-js/aes')
var hmacSha256 = require('crypto-js/hmac-sha256')
var sha256 = require('crypto-js/sha256')
var EncUtf8 = require('crypto-js/enc-utf8')

const userPriv = {
  400: 'Customer',
  310: 'Merchant Support',
  300: 'Merchant Admin',
  210: 'Institution Support',
  200: 'Institution Admin',
  100: 'Operator'
}

export const getAccessToken = (accessTokenState) => {
  // console.log('getAccessToken')
  const sessionToken = getSession(AppConfig.sessionToken)
  accessTokenState = accessTokenState || sessionToken
  // const ok = true
  // dont encrypt
  // if (ok) return accessTokenState
  return accessTokenState

  // lakukan encrypt accessTokenState dengan RSA algoritma
  // publicToken sebagai secretKey nya
  // encryptedAccessToken = RSA(accessTokenState, publicToken)
  // encryptedBody = AES(body, encryptedAccessToken)

  // if (!publicToken || !sessionToken) return ''
  // const ciphertext = AES.encrypt(publicToken, sessionToken)
  // const plaintext = ciphertext.toString(EncUtf8)
  // const plaintext = ciphertext.toString(EncUtf8)
  // const test = aesjs.utils.utf8.toBytes('asdfadsfd')
  // const test = sha256(publicToken)
  // console.log('getAccessToken test=', test)
  // console.log('getAccessToken sha256=', test)
  // console.log('getAccessToken plaintext=', plaintext)
  // console.log('getAccessToken ciphertext=', ciphertext)
  // console.log('getAccessToken publicToken=', publicToken)
  // console.log('getAccessToken sessionToken=', sessionToken)
  // return ciphertext
  // return AES.decrypt(ciphertext.toString(), sessionToken)
}
export const decryptAt = (msg, key) => {
  console.log('decryptAt')
  const publicToken = getSession(AppConfig.publicToken)
  const sessionToken = getSession(AppConfig.sessionToken)
  if (!publicToken || !sessionToken) return ''
  const str = AES.decrypt(msg, sessionToken)
  var plaintext = str.toString(EncUtf8)
  return plaintext
}
export const isLoggedIn = async (isLoggedInState) => {
  console.log('isLoggedIn isLoggedInState1===>', isLoggedInState)
  if (isLoggedInState) return true
  const loginFlag = await getSession(AppConfig.loginFlag)
  console.log('isLoggedIn loginFlag===>', loginFlag)
  // isLoggedInState = isLoggedInState || loginFlag || false
  isLoggedInState = loginFlag || false
  if ((isLoggedInState === 'true' || isLoggedInState === true)) isLoggedInState = true
  else isLoggedInState = false
  console.log('isLoggedIn isLoggedInState2===>', isLoggedInState)
  return isLoggedInState
}
export const generateHmac = (msg) => {
  return hmacSha256(msg, 'prismalink2019').toString()
}
export const generateSha256 = (msg) => {
  return sha256(msg).toString()
}
export const setSession = async (newSession, cb) => {
  console.log('setSession')
  console.log('newSession==>', setSession)
  const encryptedCurrentSession = await AsyncStorage.getItem(AppConfig.sessionData)
  let currentSessionJson = {}
  if (encryptedCurrentSession) {
    // decrypt
    var bytes = AES.decrypt(encryptedCurrentSession, 'prismalink2019')
    var decryptedData = bytes.toString(EncUtf8)
    currentSessionJson = JSON.parse(decryptedData)
    currentSessionJson = merge(currentSessionJson, newSession)
    console.log('currentSessionJson===>', currentSessionJson)
  }
  console.log('currentSessionJson1==>', currentSessionJson)
  var ciphertext = AES.encrypt(JSON.stringify(currentSessionJson), 'prismalink2019')
  var encryptedData = ciphertext.toString()
  await AsyncStorage.setItem(AppConfig.sessionData, encryptedData)
  if (cb) cb()
  return encryptedData
}
export const getSession = async (parameter, parameterInState) => {
  if (parameterInState !== null && parameterInState !== '' && parameterInState !== undefined) return parameterInState
  const encryptedCurrentSession = await AsyncStorage.getItem(AppConfig.sessionData)
  console.log('encryptedCurrentSession=', encryptedCurrentSession)
  let currentSessionJson = {}
  if (encryptedCurrentSession) {
    // decrypt
    var bytes = AES.decrypt(encryptedCurrentSession, 'prismalink2019')
    var decryptedData = bytes.toString(EncUtf8)
    console.log('decryptedData=', decryptedData)
    currentSessionJson = JSON.parse(decryptedData)
  }
  const sessionValue = path([parameter], currentSessionJson) || ''
  console.log('getSession parameter=', parameter)
  console.log('getSession sessionValue=', sessionValue)
  return sessionValue
}

export const isEmptyOrNull = (str) => {
  return isEmpty(str) || isNil(str) || str === undefined
}

const sleep = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout))
}
export const openInAppBrowser = async (url, statusBarStyle, cb) => {
  try {
    if (await InAppBrowser.isAvailable()) {
      // A delay to change the StatusBar when the browser is opened
      const animated = true
      const delay = animated && Platform.OS === 'ios' ? 400 : 0
      setTimeout(() => StatusBar.setBarStyle('light-content'), delay)
      const result = await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'close',
        preferredBarTintColor: '#453AA4',
        preferredControlTintColor: 'white',
        readerMode: false,
        animated,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'partialCurl',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: '#6200EE',
        secondaryToolbarColor: 'black',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right'
        },
        headers: {
          'my-custom-header': 'my custom header value'
        }
      })
      // A delay to show an alert when the browser is closed
      // await this.sleep(800)
      // Alert.alert('Response', JSON.stringify(result))
      cb()
    } else {
      Linking.openURL(url)
    }
  } catch (error) {
    Alert.alert(error.message)
  } finally {
    // Restore the previous StatusBar of the App
    StatusBar.setBarStyle(statusBarStyle)
  }
}

const getDeepLink = (path = '') => {
  const scheme = 'my-scheme'
  const prefix =
    Platform.OS === 'android' ? `${scheme}://my-host/` : `${scheme}://`
  return prefix + path
}
export const tryDeepLinking = async (cb) => {
  const loginUrl = 'https://proyecto26.github.io/react-native-inappbrowser/'
  const redirectUrl = getDeepLink()
  const url = `${loginUrl}?redirect_url=${encodeURIComponent(redirectUrl)}`
  try {
    if (await InAppBrowser.isAvailable()) {
      const result = await InAppBrowser.openAuth(url, redirectUrl, {
        showTitle: true,
        toolbarColor: '#6200EE',
        secondaryToolbarColor: 'black',
        enableUrlBarHiding: true,
        enableDefaultShare: true
      })
      // await sleep(800)
      // Alert.alert('Response', JSON.stringify(result))
      cb()
    } else {
      Alert.alert('InAppBrowser is not supported :/')
    }
  } catch (error) {
    console.log('error===>', error)
    Alert.alert('Something’s wrong with the app :(')
  }
}
