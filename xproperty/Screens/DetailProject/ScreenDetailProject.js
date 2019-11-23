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
import { StatusBar, Image, View } from 'react-native'
import MapView from 'react-native-maps'
import { Images } from '../../Themes'
import Carousel from '../../Components/Carousel'
import DetailContent from '../../Components/DetailContent'
const logo = Images.logo
const datas = [
  {
    img: logo,
    text: 'TYPE 1 BEDROOM',
    note: 'Semi Gross = 21.58 m2',
    note2: 'Price: Rp. 180.000.000',
    note3: '3 Unit(s) left'
  },
  {
    img: logo,
    text: 'TYPE 2 BEDROOM',
    note: 'Semi Gross = 35.31 m2',
    note2: 'Price: Rp. 260.000.000',
    note3: '8 Unit(s) left'
  },
  {
    img: logo,
    text: 'TYPE 3 BEDROOM',
    note: 'Semi Gross = 57.16 m2',
    note2: 'Price: Rp. 450.000.000',
    note3: '5 Unit(s) left'
  }
]
class ScreenDetailProject extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowUnitCategory: false
    }
    this.handleOnPress = this.handleOnPress.bind(this)
  }

  handleOnPress () {
    this.setState({ isShowUnitCategory: !this.state.isShowUnitCategory })
    this.component._root.scrollToEnd()
  }

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
            <Title>Detail Project</Title>
          </Body>
          <Right />
        </Header>
        <Content ref={c => (this.component = c)}>
          <DetailContent
            title='Project SatuDua Tiga Empatlima enamtujuh'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          />
          {this.state.isShowUnitCategory &&
            <View style={{ marginTop: 10 }}>
              <Text style={{ alignSelf: 'center' }}>See Details</Text>
              <List
                dataArray={datas}
                renderRow={data =>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail square source={data.img} />
                    </Left>
                    <Body>
                      <Text>
                        {data.text}
                      </Text>
                      <Text numberOfLines={1} note>
                        {data.note}
                      </Text>
                      <Text numberOfLines={1} note>
                        {data.note2}
                      </Text>
                      <Text numberOfLines={1} note>
                        {data.note3}
                      </Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Text>Select</Text>
                      </Button>
                    </Right>
                  </ListItem>}
              />
            </View>}
        </Content>
        {!this.state.isShowUnitCategory &&
          <View style={{ height: 80, width: '100%', borderColor: '#cdcdcd', borderTopWidth: 2 }}>
            <Grid>
              <Col style={{ padding: 10 }}>
                <Text style={{ fontSize: 12 }}>Price Starts from</Text>
                <Text>Rp 150.000.000 </Text>
                <Text style={{ fontSize: 12 }}>Inclusive of Taxes </Text>
              </Col>
              <Col style={{ width: 130, padding: 5, justifyContent: 'center' }}>
                <Button primary onPress={() => this.handleOnPress()}><Text> Select Unit </Text></Button>
              </Col>
            </Grid>
          </View>}
      </Container>
    )
  }
}

export default ScreenDetailProject
