
import React, { Component } from 'react'
import Autocomplete from 'react-native-autocomplete-input'
import { TouchableOpacity, View, Text, StyleSheet, Platform } from 'react-native'
import { Left, Label, Input } from 'native-base'

export default class AComplete extends Component {
  static renderFilm (film) {
    const { title } = film

    return (
      <View style={{ backgroundColor: 'yellow' }}>
        {/* <Text style={{
              fontSize: 18,
              fontWeight: '500',
              marginBottom: 10,
              marginTop: 10,
              textAlign: 'center',
              color: 'blue'
            }}
            >{title}
            </Text> */}
        {/* <Text style={{
              color: 'grey',
              fontSize: 12,
              marginBottom: 10,
              textAlign: 'center'
            }}
            >director
            </Text> */}
        {/* <Text style={{
              textAlign: 'center'
            }}
            >opening crawl
            </Text> */}
      </View>
    )
  }

  constructor (props) {
    super(props)
    this.state = {
      form: {},
      formSent: false,
      films: [{ title: 'film satu' }, { title: 'film dua' }, { title: 'film tiga' }],
      query: ''
    }
  }

  findFilm (query) {
    if (query === '') {
      return []
    }

    const { films } = this.state
    const regex = new RegExp(`${query.trim()}`, 'i')
    return films.filter(film => film.title.search(regex) >= 0)
  }

  render () {
    const { query } = this.state
    // const films = this.state.films
    const films = this.findFilm(query)
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim()
    return (
      <View style={[(Platform.OS === 'ios') ? styles.autocompleteContainerIos : {}, this.props.style]}>
        <Label style={styles.fieldLabel}>{this.props.fieldLabel}</Label>
        <Autocomplete
          // autoCapitalize='none'
          // autoCorrect={false}
        //   containerStyle={(Platform.OS === 'ios') ? styles.autocompleteContainerIos : styles.autocompleteContainerAndroid}
          listStyle={{ margin: 0, padding: 10 }}
          listContainerStyle={{}}
          inputContainerStyle={{ borderWidth: 0 }}
          data={films.length === 1 && comp(query, films[0].title) ? [] : films}
          defaultValue={this.props.defaultValue}
          onChangeText={text => this.props.onChangeText(text)}
          placeholder={this.props.placeholder}
          renderTextInput={(props) => {
            return (
              <Input onChangeText={props.onChangeText} defaultValue={props.defaultValue} style={this.props.inputTextStyle} placeholder={props.placeholder} placeholderTextColor='#d3d3d3' />
            )
          }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={{}} onPress={() => this.setState({ query: item.title })}>
                <Text style={{
                  fontSize: 15, backgroundColor: 'purlple'
                }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  autocompleteContainerIos: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },
  autocompleteContainerAndroid: {
  },
  fieldLabel: {
    marginBottom: 5
  }
})
