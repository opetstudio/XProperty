import React, { Component } from 'react'
import _ from 'lodash'
import {
  Content,
  Card,
  CardItem,
  Text
} from 'native-base'
import { View, Image, TouchableOpacity, RefreshControl, FlatList } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import SearchAction, { SearchSelectors } from './redux'
import { ListItem } from 'react-native-elements'
import Immutable from 'seamless-immutable'

// const [refreshing, setRefreshing] = React.useState(false)
class ListSearchHistoryString extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  keyExtractor = (item, index) => index.toString()

  handleOnPress (searchString) {
    const id = new Date().getTime()
    const searchHistoryStringById = Immutable.asMutable(this.props.searchHistoryStringById, { deep: true })
    searchHistoryStringById[id] = {
      searchString,
      id
    }

    this.props.searchPatch({ searchHistoryStringById })
    this.props.onItemPress(searchString)
  }

  renderItem = ({ item }) => (
    <ListItem
      title={item.searchString}
      leftIcon={{ name: 'history' }}
      onPress={() => this.handleOnPress(item.searchString)}
      //   subtitle={item.subtitle}
      //   leftAvatar={{
      //     source: item.avatar_url && { uri: item.avatar_url },
      //     title: item.name[0]
      //   }}
      bottomDivider
      chevron
      sty
    />
  )

  render () {
    console.log('render list search history string. props=', this.props)
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={_.orderBy(this.props.allSearchHistoryStringArr, ['id'], ['desc'])}
        renderItem={this.renderItem}
      />
    )
    // return (
    //   (this.props.allSearchHistoryStringArr || []).map((item) => (
    //     <ListItem
    //       key={item.id}
    //       title='cke'
    //       leftIcon={{ name: 'history' }}
    //       bottomDivider
    //       chevron
    //       onPress={() => this.props.onPress(item.searchString)}
    //       style={{ backgroundColor: 'red', color: '#000' }}
    //     />
    //   ))
    // )
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
)(withNavigation(ListSearchHistoryString))
