import React, { Component } from 'react'
import {
  Container,
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
import { StatusBar } from 'react-native'
import Footer from '../../Containers/Footer'
import ListProject from '../../Containers/Project/ListProject'

// const [refreshing, setRefreshing] = React.useState(false)
class ScreenListProjects extends Component {
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
            <Title>All Projects</Title>
          </Body>
          <Right />
        </Header>
        <ListProject />
        <Footer />
      </Container>
    )
  }
}

export default ScreenListProjects
