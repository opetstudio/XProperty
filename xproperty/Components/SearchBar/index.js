import React, { Component } from 'react'
import { View } from 'react-native'
import { SearchBar } from 'react-native-elements'
import Immutable from 'seamless-immutable'
class Index extends Component {
  handleOnSubmitEditing (searchString) {
    const id = new Date().getTime()
    const searchHistoryStringById = Immutable.asMutable(this.props.searchHistoryStringById, { deep: true })
    searchHistoryStringById[id] = {
      searchString,
      id
    }

    this.props.searchPatch({ searchHistoryStringById })
    this.props.onSubmitEditing(searchString)
  }

  render () {
    const { search, onChangeText, style, autoFocus, onFocus } = this.props
    return (
      <View style={[{ flexDirection: 'row', width: '100%', alignContent: 'center', justifyContent: 'center', backgroundColor: 'blue', height: '100%' }, style]}>
        <SearchBar
          placeholder='Lokasi, area, project, developer'
          onChangeText={onChangeText}
          value={search}
          containerStyle={{ width: '100%', borderWidth: 1, borderColor: '#cdcdcd', height: '100%', padding: 0, backgroundColor: '#fff', margin: 0, borderTopColor: '#cdcdcd', borderBottomColor: '#cdcdcd' }}
          inputContainerStyle={{ height: '100%', backgroundColor: '#fff' }}
          inputStyle={{ backgroundColor: 'white', fontSize: 15 }}
          searchIcon={search && false}
          returnKeyType='search'
          onSubmitEditing={() => this.handleOnSubmitEditing(search)}
          autoFocus={autoFocus}
          onFocus={onFocus}
        />
      </View>
    )
  }
}

export default Index
