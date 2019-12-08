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
  Thumbnail,
  Text
} from 'native-base'
// import { Grid, Row, Col } from 'react-native-easy-grid'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { path } from 'ramda'
import { StatusBar, Image, View } from 'react-native'
import { Images } from '../../Themes'
import DetailProject from '../../Containers/Project/DetailProject'
const logo = Images.logo

class ScreenDetailProject extends Component {
  render () {
    console.log('render ScreenDetailProject', this.props)
    const projectId = path(['state', 'params', 'projectId'], this.props.navigation)
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
            <Title>Detail Project</Title>
          </Body>
          <Right />
        </Header>
        <Content ref={c => (this.component = c)}>
          <DetailProject
            projectId={projectId}
          />
          <Button block primary style={{ margin: 20 }} onPress={() => this.props.navigation.navigate('ScreenListClusters')}>
            <Text>View All Clusters</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default ScreenDetailProject
