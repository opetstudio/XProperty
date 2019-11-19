const React = require('react-native')
const { Platform, Dimensions } = React

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default {
  drawerCover: {
    alignSelf: 'stretch',
    height: 200,
    width: null,
    position: 'relative',
    marginBottom: 10
  },
  welcomeText: {
    position: 'absolute',
    left: Platform.OS === 'android' ? 100 : 100,
    top: 70,
    color: '#ffffff'
  },
  userNameText: {
    position: 'absolute',
    left: 100,
    top: 88,
    color: '#ffffff',
    fontSize: 25
  },
  drawerImage: {
    position: 'absolute',
    left: Platform.OS === 'android' ? 10 : 10,
    top: Platform.OS === 'android' ? 50 : 50
    // width: 210,
    // height: 75,
    // resizeMode: 'cover'
  },
  text: {
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
    fontSize: 16,
    marginLeft: 20
  },
  badgeText: {
    fontSize: Platform.OS === 'ios' ? 13 : 11,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: Platform.OS === 'android' ? -3 : undefined
  }
}
