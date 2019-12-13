import React, { Component } from 'react'
import { Modal, View, TouchableHighlight, Text, StatusBar, Platform } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import SearchAction, { SearchSelectors } from './redux'
import { ProjectTypes } from '../Project/redux'
class FilterFormModal extends Component {
  // static propTypes = {
  //   modalVisible: PropTypes.bool,
  //   onRequestClose: PropTypes.func
  // }

  // //
  // // // Defaults for props
  // static defaultProps = {
  //   modalVisible: false,
  //   onRequestClose: () => {}
  // }

  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     modalVisible: this.props.modalVisible
  //   }
  // }

  // setModalVisible (modalVisible) {
  //   this.setState({ modalVisible })
  // }

  render () {
    return (
      <Modal
        animationType='slide'
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          this.props.setModalVisible(false)
          this.props.onRequestClose()
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

// export default ScreenListProjects
const mapStateToProps = (state, ownProps) => {
  // const foo = params.get('foo'); // bar
  return {
    searchHistoryStringById: SearchSelectors.searchHistoryStringById(state.search),
    allSearchHistoryStringArr: SearchSelectors.getAllSearchHistoryStringArr(state.search)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchPatch: data => dispatch(SearchAction.searchPatch(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(FilterFormModal))
