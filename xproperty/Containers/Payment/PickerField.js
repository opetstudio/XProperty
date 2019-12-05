import React, { Component } from 'react'
import { ImageBackground, StyleSheet, View, Platform } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content, Form, Text, Item, Input, Label, Textarea, DatePicker, Picker } from 'native-base'

export default class PickerField extends Component {
  render () {
    return (
    //   <View style={{ width: '100%', padding: 10 }}>
      <View style={[this.props.style, { borderColor: '#cdcdcd', borderWidth: 1, backgroundColor: '#fff', width: '100%' }]}>
        <Picker
          mode='dropdown'
          iosIcon={<Icon name='ios-arrow-down' />}
          headerBackButtonText='Baaack!'
          style={[{ width: '100%', height: 40 }]}
          selectedValue={this.props.selectedValue}
          onValueChange={this.props.onValueChange}
        >
          {this.props.items.map(r => (<Item key={r} label={r} value={r} />))}
        </Picker>
      </View>
    //   </View>
    )
  }
}
