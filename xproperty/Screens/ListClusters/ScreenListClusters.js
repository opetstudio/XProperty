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
            <Title>List Cluster</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                noBorder
                style={{ paddingBottom: 2, paddingTop: 2, paddingRight: 0, marginLeft: 0 }}
              >
                <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.navigate('ScreenDetailCluster')}>
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
                        <Text style={{ color: '#fff' }}>Cluster 1 cluster 1</Text>
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

export default withNavigation(ScreenListProjects)
