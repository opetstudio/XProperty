import React, { Component } from 'react'
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Icon,
  Button,
  Title,
  List,
  ListItem,
  Card,
  CardItem,
  Text
} from 'native-base'
import { View, StatusBar, Image, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Images } from '../../Themes'
import Footer from '../../Containers/Footer'

const cardImage = Images.cardImage2
const datas = [
  { id: 1, isPaied: 'Y' },
  { id: 2, isPaied: 'Y' },
  { id: 3, isPaied: 'N' },
  { id: 4, isPaied: 'N' },
  { id: 5, isPaied: 'Y' },
  { id: 6, isPaied: 'Y' },
  { id: 7, isPaied: 'N' },
  { id: 8, isPaied: 'Y' },
  { id: 9, isPaied: 'N' },
  { id: 10, isPaied: 'Y' }
]
const styles = {
  mb: {
    marginBottom: 1
  },
  text: {
    alignSelf: 'center',
    marginBottom: 7
  }
}
class ScreenListBooking extends Component {
  render () {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header>
          <StatusBar barStyle='light-content' />
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>List Booking</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <List
            style={{ paddingLeft: 0 }}
            dataArray={datas}
            renderRow={data =>
              <ListItem noIndent style={{ paddingLeft: 0, paddingRight: 0, flexDirection: 'row', height: 70, overflow: 'hidden' }} onPress={() => alert('cek')}>
                <View style={{ flex: 1 }}>
                  <Text style={{ alignSelf: 'flex-start' }}>
                        Nofrets Poai Revina Purukan
                  </Text>
                </View>
                <View style={{ width: 150 }}>
                  <Text style={{ backgroundColor: data.isPaied === 'Y' ? 'green' : 'red', padding: 5, color: '#fff', fontSize: 12, borderRadius: 10, width: 100, textAlign: 'center' }}>{((data.isPaied === 'Y') ? 'Lunas' : 'Belum Lunas')}</Text>
                  <Text numberOfLines={1} note>
                        Evenccio #85
                  </Text>
                </View>
              </ListItem>}
          />
        </Content>
        <Footer />
      </Container>
    )
  }
}

export default withNavigation(ScreenListBooking)
