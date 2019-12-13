import React, { Component } from 'react'
import { ImageBackground, StyleSheet, View, Platform, Modal, TouchableHighlight, Image, Alert } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content, Form, Text, Item, Input, Label, Textarea } from 'native-base'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { path } from 'ramda'
import Immutable from 'seamless-immutable'
import RNTextDetector from 'react-native-text-detector'
import vision, { firebase } from '@react-native-firebase/ml-vision'
import Autocomplete from '../../Components/AutocompleteTextInput'
import BookingAction, { BookingSelectors } from './redux'
import Scanner from '../../Components/Scanner'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Images } from '../../Themes'

class FormBooking extends Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {},
      formSent: false,
      scannerActive: false,
      modalVisible: false,
      captureImageForFieldName: ''
    }
    this.handleOnChangeText = this.handleOnChangeText.bind(this)
    this.handleOnCaptureImage = this.handleOnCaptureImage.bind(this)
    this.fetchNikFromImage = this.fetchNikFromImage.bind(this)
  }

  componentWillMount () {
    this.props.bookingPatch({ bookingForm: {} })
  }

  async fetchNikFromImage (img) {
    if (!img) {
      Alert.alert('Cannot Detect the value from image')
      return
    }
    const localFile = img
    const processed = await vision().textRecognizerProcessImage(localFile)
    const blocks = path(['blocks'], processed)
    blocks.forEach((response, i) => {
      const txt = path(['text'], response)
      if (txt.toLowerCase().indexOf('nik') !== -1) {
        const bookingForm = Immutable.asMutable(this.props.bookingForm, { deep: true })
        const ktpStr = path(['text'], blocks[i + 1])
        bookingForm.ktp = ktpStr.replace(/\D/g, '')
        this.props.bookingPatch({ bookingForm })
      }
    })
  }

  async fetchNPWPNumberFromImage (img) {
    if (!img) {
      Alert.alert('Cannot Detect the value from image')
      return
    }
    const localFile = img
    const processed = await vision().textRecognizerProcessImage(localFile)
    const blocks = path(['blocks'], processed)
    blocks.forEach((response, i) => {
      const txt = path(['text'], response)
      console.log('result txt====>', txt)
      if (txt.toLowerCase().indexOf('npwp') !== -1) {
        const bookingForm = Immutable.asMutable(this.props.bookingForm, { deep: true })
        bookingForm.npwp = txt.replace(/\D/g, '')
        this.props.bookingPatch({ bookingForm })
      }
    })
  }

  getAutocompleteStyle (i) {
    return Platform.OS === 'ios' ? { top: 80 * i, zIndex: 100 - i } : { marginBottom: 10 }
  }

  detectText = async () => {
    try {
      const options = {
        quality: 0.8,
        base64: true,
        skipProcessing: true
      }
      const { uri } = await this.camera.takePictureAsync(options)
      const visionResp = await RNTextDetector.detectFromUri(uri)
      console.log('visionResp', visionResp)
    } catch (e) {
      console.warn(e)
    }
  }

  handleOnChangeText (name, text) {
    const bookingForm = Immutable.asMutable(this.props.bookingForm, { deep: true })
    bookingForm[name] = text
    this.props.bookingPatch({ bookingForm })
  }

  handleOnCaptureImage (dataUri) {
    // alert(data)
    const bookingForm = Immutable.asMutable(this.props.bookingForm, { deep: true })
    bookingForm[this.state.captureImageForFieldName] = dataUri
    this.props.bookingPatch({ bookingForm })
    this.setState({ modalVisible: false })
  }

  render () {
    const ktpImage = path(['bookingForm', 'ktpImage'], this.props)
    const npwpImage = path(['bookingForm', 'npwpImage'], this.props)
    return (
      <Form>
        <Autocomplete onChangeText={text => this.handleOnChangeText('full_name', text)} defaultValue={this.props.bookingForm.full_name} inputTextStyle={styles.inputTextStyle} style={this.getAutocompleteStyle(0)} placeholder='Full name' fieldLabel='Full Name' />
        <Autocomplete onChangeText={text => this.handleOnChangeText('customer_code', text)} defaultValue={this.props.bookingForm.customer_code} inputTextStyle={styles.inputTextStyle} style={this.getAutocompleteStyle(1)} placeholder='Customer Code' fieldLabel='Customer Code' />
        <Autocomplete onChangeText={text => this.handleOnChangeText('ktp', text)} defaultValue={this.props.bookingForm.ktp} inputTextStyle={styles.inputTextStyle} style={this.getAutocompleteStyle(2)} placeholder='KTP' fieldLabel='KTP' />
        <View style={{ marginTop: Platform.OS === 'ios' ? 240 : 0 }} />
        {/* <Button block style={{ margin: 15 }} onPress={() => this.props.navigation.navigate('ScreenScanner', { callback: this.handleOnCaptureImage })}> */}
        <View style={{ backgroundColor: '#cdcdcd', height: 250, width: '100%', marginBottom: 5 }}>
          {!ktpImage && <Image source={Images.drawerCover} style={{ flex: 1, resizeMode: 'contain', width: '100%' }} />}
          {ktpImage && <Image source={{ uri: ktpImage }} style={{ flex: 1, resizeMode: 'contain', width: '100%' }} />}
          {/* {ktpImage && <Text>{ktpImage}</Text>} */}
        </View>
        <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
          <Button small style={{ width: 150, marginRight: 10, justifyContent: 'center' }} onPress={() => this.setState({ modalVisible: true, captureImageForFieldName: 'ktpImage' })}>
            <Text>Capture KTP</Text>
          </Button>
          <Button small style={{ width: 150, marginLeft: 10, justifyContent: 'center' }} onPress={() => this.fetchNikFromImage(ktpImage)}>
            <Text>Fetch NIK</Text>
          </Button>
        </View>
        <Label style={styles.fieldLabel}>Phone Number</Label>
        <Input style={styles.inputTextStyle} placeholder='ex. 123456' placeholderTextColor='#d3d3d3' />
        <Label style={styles.fieldLabel}>NPWP</Label>
        <Input style={styles.inputTextStyle} onChangeText={text => this.handleOnChangeText('npwp', text)} defaultValue={this.props.bookingForm.npwp} placeholder='ex. 123456' placeholderTextColor='#d3d3d3' />
        <View style={{ backgroundColor: '#cdcdcd', height: 250, width: '100%', marginBottom: 5 }}>
          {!npwpImage && <Image source={Images.drawerCover} style={{ flex: 1, resizeMode: 'contain', width: '100%' }} />}
          {npwpImage && <Image source={{ uri: npwpImage }} style={{ flex: 1, resizeMode: 'contain', width: '100%' }} />}
          {/* {ktpImage && <Text>{ktpImage}</Text>} */}
        </View>
        <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
          <Button small style={{ width: 150, marginRight: 10, justifyContent: 'center' }} onPress={() => this.setState({ modalVisible: true, captureImageForFieldName: 'npwpImage' })}>
            <Text>Capture NPWP</Text>
          </Button>
          <Button small style={{ width: 150, marginLeft: 10, justifyContent: 'center' }} onPress={() => this.fetchNPWPNumberFromImage(npwpImage)}>
            <Text>Fetch NO</Text>
          </Button>
        </View>
        <Label style={styles.fieldLabel}>Address</Label>
        <Textarea style={{ backgroundColor: '#fff' }} rowSpan={5} bordered placeholder='Address' />
        <Button block style={{ margin: 15 }} onPress={() => this.props.navigation.navigate('ScreenListPaymentPlan')}>
          <Text>Submit</Text>
        </Button>
        <Modal
          animationType='slide'
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.')
            // this.setModalVisible(!this.state.modalVisible)
            this.setState({ modalVisible: false })
          }}
          closeOnClick
        >
          <View style={{ backgroundColor: 'yellow', flex: 1 }}>
            <Scanner onCaptureImage={this.handleOnCaptureImage} />
            {/* <View style={{ height: 20, backgroundColor: 'red' }}>
              <TouchableHighlight
                onPress={() => {
                  this.setState({ modalVisible: false })
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View> */}
          </View>
        </Modal>
      </Form>
    )
  }
}
const styles = StyleSheet.create({
  autocompleteIos: {
  },
  inputTextStyle: {
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#cdcdcd',
    borderWidth: 1,
    fontSize: 15,
    marginBottom: 10
  },
  fieldLabel: {}
})

const mapStateToProps = (state, ownProps) => {
  // const foo = params.get('foo'); // bar
  return {
    // paymentFormSubmitMSG: PaymentSelectors.paymentFormSubmitMSG(state.payment),
    // paymentAuthMSG: PaymentSelectors.paymentAuthMSG(state.payment),
    // maskedCardNo: PaymentSelectors.maskedCardNo(state.payment),
    // creditCard: PaymentSelectors.creditCard(state.payment),
    // modalVisible: PaymentSelectors.modalVisible(state.payment),
    // payerAuthenticationUrl: PaymentSelectors.payerAuthenticationUrl(state.payment)
    bookingForm: BookingSelectors.bookingForm(state.booking)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // paymentFormSubmit: data => dispatch(PaymentAction.paymentFormSubmit(data)),
    // paymentAuth: data => dispatch(PaymentAction.paymentAuth(data)),
    bookingPatch: (data) => dispatch(BookingAction.bookingPatch(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(FormBooking))
