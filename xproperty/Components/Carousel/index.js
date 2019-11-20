import React, { Component } from 'react'
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { Button, Icon, Text } from 'native-base'
import { Images, Metrics } from '../../Themes'
// import Swiper from 'react-native-swiper'
import ViewPager from '@react-native-community/viewpager'
import { withNavigation } from 'react-navigation'

const width = Metrics.screenWidth
const height = Metrics.screenHeight

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  slide: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  img: {
    flex: 1,
    // resizeMode: 'contain',
    width: '100%',
    height: 250
  },
  imgWrap: {
    flex: 1,
    width: '100%'
    // backgroundColor: '#c0c0c0'
  },
  attrWrap: {
    // backgroundColor: '#c0c0c0',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    margin: 5,
    backgroundColor: '#87868c',
    height: 40
  },
  buttonImage: {
    resizeMode: 'contain',
    height: 35
  },
  cardNumberWrap: {
    position: 'absolute',
    backgroundColor: '#87868c',
    width: '100%',
    top: 148
  },
  cardNumber: {
    fontSize: 24,
    // alignSelf: 'center',
    color: 'white'
  }
})
// cardBni: require('../Images/Cards/bni.png'),
//   cardBri1: require('../Images/Cards/bri1.png'),
//   cardBri2: require('../Images/Cards/bri2.png'),
//   mandiri: require('../Images/Cards/Mandiri.png')
class CardSwipe extends Component {
  render () {
    return (
      <ViewPager style={styles.wrapper} showPageIndicator>
        <View key='1' style={styles.slide}>
          <View style={styles.imgWrap}>
            <Image source={Images.defaultImageBanner} style={styles.img} />
          </View>
        </View>
        <View key='2' style={styles.slide}>
          <View style={styles.imgWrap}>
            <Image source={Images.defaultImageBanner} style={styles.img} />
          </View>
        </View>
        <View key='3' style={styles.slide}>
          <View style={styles.imgWrap}>
            <Image source={Images.defaultImageBanner} style={styles.img} />
          </View>
        </View>
      </ViewPager>
    )
  }
}
export default withNavigation(CardSwipe)
