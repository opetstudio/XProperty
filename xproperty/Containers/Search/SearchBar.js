import React, { Component } from 'react'
import {
  Content,
  List,
  ListItem,
  Card,
  CardItem,
  Text
} from 'native-base'
import { View, Image, TouchableOpacity, RefreshControl } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import SearchAction, { SearchSelectors } from './redux'
import SearchBar from '../../Components/SearchBar'

// const [refreshing, setRefreshing] = React.useState(false)
// export default ScreenListProjects
const mapStateToProps = (state, ownProps) => {
// const foo = params.get('foo'); // bar
  return {
    searchHistoryStringById: SearchSelectors.searchHistoryStringById(state.search)
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
)(withNavigation(SearchBar))
