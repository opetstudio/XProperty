import React, { Component } from 'react'
import { Image, View, ImageBackground } from 'react-native'
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  Thumbnail
} from 'native-base'
import styles from './style'
import { Images } from '../../Themes'

const drawerCover = Images.drawerCover
const drawerImage = Images.drawerImage
const datas = [
  {
    name: 'All Projects',
    route: 'ScreenListProjects',
    icon: 'phone-portrait',
    bg: '#C5F442'
  },
  {
    name: 'All Projects',
    route: 'Anatomy',
    icon: 'phone-portrait',
    bg: '#C5F442'
  },
  {
    name: 'All Projects',
    route: 'Anatomy',
    icon: 'phone-portrait',
    bg: '#C5F442'
  },
  {
    name: 'All Projects',
    route: 'Anatomy',
    icon: 'phone-portrait',
    bg: '#C5F442'
  },
  {
    name: 'All Projects',
    route: 'Anatomy',
    icon: 'phone-portrait',
    bg: '#C5F442'
  }
]

class ScreenSidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    }
  }

  render () {
    console.log('this.props===>', this.props)
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: '#fff' }}
        >
          <ImageBackground source={drawerCover} style={{ flex: 1, height: 250, backgroundColor: 'blue', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'stretch' }}>
            <View style={{ justifyContent: 'center', width: 90, padding: 10 }}>
              <Thumbnail large source={drawerImage} style={{ backgroundColor: 'red' }} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
              <Text style={{ fontSize: 12, color: '#fff' }}>Welcome</Text>
              <Text style={{ color: '#fff' }}>Nofrets Poai</Text>
            </View>
          </ImageBackground>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: '#777', fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}
                      </Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    )
  }
}

export default ScreenSidebar
