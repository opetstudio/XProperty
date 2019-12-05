import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ImageBackground, StyleSheet, View, Platform, Alert, Modal } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content, Form, Text, Item, Input, Label, Textarea, DatePicker, Picker, Spinner, Card, CardItem } from 'native-base'
import PaymentAction, { PaymentSelectors } from './redux'
import { Colors } from '../../Themes'
import PickerField from './PickerField'
import { isEmptyOrNull } from '../../Lib/Utils'
import ModalContent from './ModalContent'

const month = ['Month', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
const years = ['Year', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032']
class FormPayment extends Component {
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
      modalVisible: false
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
    this.props.paymentPatch({ paymentFormSubmitMSG: { ir: false, rc: '', rs: '', rd: '' } })
  }

  // componentDidUpdate (prevProps) {
  //   if (!this.props.paymentFormSubmitMSG.ir && this.props.paymentFormSubmitMSG.rc === '00') {
  //     this.props.onSuccessSubmit()
  //   }
  // }

  renderForm () {
    return (
      <Form>
        <View style={{ marginTop: Platform.OS === 'ios' ? 240 : 0 }} />
        <Label style={styles.fieldLabel}>Card Number</Label>
        <Input style={styles.inputTextStyle} placeholder='ex. 4444555566667777' placeholderTextColor='#d3d3d3' onChangeText={this.handleOnChangeText.bind(this)} />

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
                selectedValue={this.state.form.expMonth}
                onValueChange={this.handleChangeExpiryMonth.bind(this)}
              />
            </View>
          </View>
          <View style={{ width: '50%' }}>
            <Label style={styles.fieldLabel}>Expiry Year</Label>
            <View style={{ margin: 5, marginRight: 0 }}>
              <PickerField
                items={years}
                selectedValue={this.state.form.expYear}
                onValueChange={this.handleChangeExpiryYear.bind(this)}
              />
            </View>
          </View>
        </View>
        <Label style={styles.fieldLabel}>Amount</Label>
        <Text>Rp. 4000</Text>
        <Button block style={{ margin: 15 }} onPress={this.handleSubmit.bind(this)}>
          {!this.props.paymentFormSubmitMSG.ir && <Text>Submit</Text>}
          {this.props.paymentFormSubmitMSG.ir && <Spinner />}
        </Button>
        <Text style={{ alignSelf: 'center', color: 'red', fontSize: 10 }}>{this.props.paymentFormSubmitMSG.rd}</Text>
      </Form>
    )
  }

  render () {
    if (!isEmptyOrNull(this.props.maskedCardNo)) return this.renderForm()
    return (
      <View>
        <Card>
          {this.props.creditCard.map(r => (
            <CardItem style={{ flexDirection: 'row' }} key={r.tokenId}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 12, color: '#cdcdcd' }}>Card Number:</Text>
                <Text style={{}}>{r.maskedCardNo}</Text>
                <Text style={{ fontSize: 12, color: '#cdcdcd' }}>Expiry Date:</Text>
                <Text>{r.expMonth}/{r.expYear}</Text>
              </View>
              <View style={{ width: 80 }}>
                <Button light iconRight small onPress={() => this.props.paymentAuth({ amount: 5000, tokenId: r.tokenId })}>
                  <Text style={{ fontSize: 10, color: 'green' }}>Pay</Text>
                  <Icon active name='arrow-forward' />
                </Button>
                {/* <Icon name='arrow-forward' /> */}
              </View>
            </CardItem>
          ))}
        </Card>
        <Button block style={{ margin: 15 }} onPress={() => Alert.alert('Goto Screen Add new Visa/Master Card')}>
          <Text>Add New Card</Text>
        </Button>
        <Modal
          animationType='slide'
          transparent
          visible={this.props.modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.')
            this.setModalVisible(!this.props.modalVisible)
          }}
          closeOnClick
        >
          {/* <TouchableHighlight style={{backgroundColor: 'red', height: '100%'}} onPress={() => Alert.alert('cek')}> */}
          <ModalContent
            setModalVisible={this.setModalVisible}
            modalVisible={this.props.modalVisible}
            payerAuthenticationUrl={this.props.payerAuthenticationUrl}
          />
          {/* </TouchableHighlight> */}
        </Modal>
      </View>
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
    maskedCardNo: PaymentSelectors.maskedCardNo(state.payment),
    creditCard: PaymentSelectors.creditCard(state.payment),
    modalVisible: PaymentSelectors.modalVisible(state.payment),
    payerAuthenticationUrl: PaymentSelectors.payerAuthenticationUrl(state.payment)
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
)(FormPayment)
