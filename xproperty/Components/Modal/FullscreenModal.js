import React, { Component } from 'react'
import { Modal, View, TouchableHighlight, Text } from 'react-native'

export default class FullscreenModal extends Component {
  render () {
    return (
      <Modal
        animationType='slide'
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.')
          this.props.setModalVisible(false)
        }}
      >
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Component Filter sedang didevelop</Text>

            <TouchableHighlight
              onPress={() => {
                this.props.setModalVisible(false)
              }}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    )
  }
}
