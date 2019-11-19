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
import { Images } from '../../Themes'

const cardImage = Images.cardImage2
const datas = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 }
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
        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                noBorder
                style={{ paddingBottom: 2, paddingTop: 2 }}
              >
                <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.navigate('ScreenDetailProject')}>
                  <Card style={styles.mb}>
                    <CardItem cardBody>
                      <Image
                        style={{
                          resizeMode: 'cover',
                          width: null,
                          height: 200,
                          flex: 1
                        }}
                        source={cardImage}
                      />
                      <View style={{ position: 'absolute', bottom: 0, backgroundColor: '#000', opacity: 0.5, height: 70, width: '100%' }} />
                      <View style={{ position: 'absolute', bottom: 0, height: 70, width: '100%', padding: 5 }}>
                        <Text style={{ color: '#fff' }}>Project 1 Project 1 Project 1 Project 1</Text>
                        <Text style={{ color: '#cdcdcd', fontSize: 11 }}>Menteng, Jakarta Selata, DKI Jakarta</Text>
                      </View>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              </ListItem>}
          />
        </Content>
      </Container>
    )
  }
}

export default ScreenListProjects
