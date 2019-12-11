import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Content,
  Button,
  Item,
  Input,
  Form,
  Text,
  Spinner,
  Label
} from 'native-base'
import { StyleSheet } from 'react-native'
import SignupAction, { SignupSelectors } from './redux'
import { Colors } from '../../Themes'

class FormSignup extends Component {
  // componentWillMount () {
  //   this.props.signupPatch({ signupFormSubmitMSG: { ir: false, rc: '', rs: '', rd: '' } })
  // }

  // componentDidUpdate (prevProps) {
  //   if (!this.props.signupFormSubmitMSG.ir && this.props.signupFormSubmitMSG.rc === '00') {
  //     this.props.onSuccessSubmit()
  //   }
  // }

  render () {
    return (
      <Form>
        <Text style={{}}>Full Name</Text>
        <Input style={styles.inputTextStyle} placeholder='ex. 123456' placeholderTextColor='#d3d3d3' />
        <Text style={{}}>Email</Text>
        <Input style={styles.inputTextStyle} placeholder='ex. 123456' placeholderTextColor='#d3d3d3' />
        <Text style={{}}>Address</Text>
        <Input style={styles.inputTextStyle} placeholder='ex. 123456' placeholderTextColor='#d3d3d3' />
        {/* <Text style={{}}>Full Name</Text>
        <Input style={styles.inputTextStyle} placeholder='ex. 123456' placeholderTextColor='#d3d3d3' />
        <Text style={{}}>Full Name</Text>
        <Input style={styles.inputTextStyle} placeholder='ex. 123456' placeholderTextColor='#d3d3d3' />
        <Text style={{}}>Full Name</Text> */}
        {/* <Input style={styles.inputTextStyle} placeholder='ex. 123456' placeholderTextColor='#d3d3d3' /> */}
        <Button block style={{ margin: 15 }} onPress={() => this.props.signupFormSubmit({})}>
          <Text>Submit</Text>
        </Button>
        {this.props.signupFormSubmitMSG.ir && <Spinner color='green' />}
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
    signupFormSubmitMSG: SignupSelectors.signupFormSubmitMSG(state.signup)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signupFormSubmit: data => dispatch(SignupAction.signupFormSubmit(data)),
    signupPatch: (data) => dispatch(SignupAction.signupPatch(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSignup)
