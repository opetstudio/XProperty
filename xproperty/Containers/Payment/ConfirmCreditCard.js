import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { ImageBackground, StyleSheet, View, Platform, Alert, Modal, StatusBar, Linking } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content, Form, Text, Item, Input, Label, Textarea, DatePicker, Picker, Spinner, Card, CardItem } from 'native-base'
import InAppBrowser from 'react-native-inappbrowser-reborn'
import PaymentAction, { PaymentSelectors } from './redux'
import { Colors } from '../../Themes'
import PickerField from './PickerField'
import { isEmptyOrNull, openInAppBrowser, tryDeepLinking } from '../../Lib/Utils'
import ModalContent from './ModalContent'

const month = ['Month', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
const years = ['Year', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032']
class ConfirmCreditCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {
        amount: '4000',
        expMonth: '',
        expYear: '',
        cardNo: ''
      },
      formSent: false,
      isSubmited: false,
      modalVisible: false,
      url: 'https://www.google.com',
      statusBarStyle: 'dark-content',
      openBrowser: false
    }
    this.setModalVisible = this.setModalVisible.bind(this)
  }

  handleChangeExpiryMonth (val) {
    this.setState({ form: { ...this.state.form, expMonth: val } })
  }

  handleChangeExpiryYear (val) {
    this.setState({ form: { ...this.state.form, expYear: val } })
  }

  handleOnChangeText (val) {
    console.log('handleOnChangeText val=', val)
    this.setState({ form: { ...this.state.form, cardNo: val } })
  }

  handleSubmit () {
    // this.setState({ isSubmited: true })
    this.props.paymentFormSubmit(this.state.form)
  }

  setModalVisible (visible) {
    this.props.paymentPatch({ modalVisible: visible })
  }

  componentWillMount () {
    this.props.paymentPatch({ payerAuthenticationUrl: '', paymentFormSubmitMSG: { ir: false, rc: '', rs: '', rd: '' } })
    this.setModalVisible(!this.props.modalVisible)
    console.log('componentWillMount========== check status payment')
  }

  componentDidUpdate (prevProps) {
    if (prevProps.payerAuthenticationUrl !== this.props.payerAuthenticationUrl && !isEmptyOrNull(this.props.payerAuthenticationUrl)) {
      // tryDeepLinking(() => {
      //   alert('cek')
      // })
      openInAppBrowser(this.props.payerAuthenticationUrl, 'dark-content', () => {
        // alert('cek')
        console.log('openInAppBrowser callback========== check status payment')
      })
    }
    // if (!this.props.paymentFormSubmitMSG.ir && this.props.paymentFormSubmitMSG.rc === '00') {
    //   this.props.onSuccessSubmit()
    // }
  }

  render () {
    console.log('render confirm credit card props=', this.props)
    const {
      maskedCardNumber,
      expMonth,
      expYear,
      tokenId
    } = this.props.tokenDetail
    return (
      <Form>
        <View style={{ marginTop: Platform.OS === 'ios' ? 240 : 0 }} />
        <Text style={{ fontSize: 12, marginBottom: 10 }}>Credit Card Confirmation</Text>
        <Label style={styles.fieldLabel}>Card Number</Label>
        <Input style={styles.inputTextStyle} placeholder='ex. 4444555566667777' placeholderTextColor='#d3d3d3' value={maskedCardNumber} />

        {/* <Input style={styles.inputTextStyle} placeholder='ex. 123456' placeholderTextColor='#d3d3d3' /> */}
        <View style={{ flexDirection: 'row' }}>
          {/* <View style={{ width: '50%' }}>
                  <Label style={styles.fieldLabel}>Expiry Month</Label>
                  <View style={{ borderColor: '#cdcdcd', borderWidth: 1, backgroundColor: '#fff', width: '100%' }}>
                    <Picker
                      mode='dropdown'
                      iosIcon={<Icon name='ios-arrow-down' />}
                      headerBackButtonText='Baaack!'
                      textStyle={{ borderWidth: 2, borderColor: 'red'}}
                      placeholderStyle={{ backgroundColor: 'blue', borderWidth: 2, borderColor: 'red' }}
                      style={[{ width: '100%', height: 40 }]}
                      selectedValue={this.state.expiryMonth}
                      onValueChange={this.handleChangeExpiryMonth.bind(this)}
                    >
                      {month.map(r => (<Item key={r} label={r} value={r} />))}
                    </Picker>
                  </View>
                </View> */}
          <View style={{ width: '50%' }}>
            <Label style={styles.fieldLabel}>Expiry Month</Label>
            <View style={{ margin: 5, marginLeft: 0 }}>
              <PickerField
                items={month}
                selectedValue={expMonth}
                onValueChange={() => {}}
              />
            </View>
          </View>
          <View style={{ width: '50%' }}>
            <Label style={styles.fieldLabel}>Expiry Year</Label>
            <View style={{ margin: 5, marginRight: 0 }}>
              <PickerField
                items={years}
                selectedValue={expYear}
                onValueChange={() => {}}
              />
            </View>
          </View>
        </View>
        <Label style={styles.fieldLabel}>Amount</Label>
        <Text>Rp. 4000</Text>
        <Button block style={{ margin: 15 }} onPress={() => this.props.paymentAuth({ amount: 5000, tokenId: tokenId })} disabled={this.props.paymentAuthMSG.ir}>
          {!this.props.paymentAuthMSG.ir && <Text>Pay</Text>}
          {this.props.paymentAuthMSG.ir && <Spinner />}
        </Button>
        <Text style={{ alignSelf: 'center', color: 'red', fontSize: 12 }}>{this.props.paymentAuthMSG.rd}</Text>
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
  fieldLabel: {},
  rowWrapper: {
    flexDirection: 'row',
    backgroundColor: 'purple'
  },
  rowLeftColText: {
    flex: 1,
    backgroundColor: 'red'
  },
  rowRightColText: {
    width: 150, textAlign: 'right', backgroundColor: 'blue'
  }
})

const mapStateToProps = (state, ownProps) => {
// const foo = params.get('foo'); // bar
  return {
    paymentFormSubmitMSG: PaymentSelectors.paymentFormSubmitMSG(state.payment),
    paymentAuthMSG: PaymentSelectors.paymentAuthMSG(state.payment),
    maskedCardNo: PaymentSelectors.maskedCardNo(state.payment),
    creditCard: PaymentSelectors.creditCard(state.payment),
    modalVisible: PaymentSelectors.modalVisible(state.payment),
    payerAuthenticationUrl: PaymentSelectors.payerAuthenticationUrl(state.payment),
    tokenDetail: PaymentSelectors.getTokenById(state.payment, ownProps.cardHash) || {}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    paymentFormSubmit: data => dispatch(PaymentAction.paymentFormSubmit(data)),
    paymentAuth: data => dispatch(PaymentAction.paymentAuth(data)),
    paymentPatch: (data) => dispatch(PaymentAction.paymentPatch(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(ConfirmCreditCard))
