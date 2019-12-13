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
    id: 1,
    name: 'All Projects',
    route: 'ScreenListProjects',
    icon: 'project-diagram',
    bg: '#C5F442'
  },
  {
    id: 2,
    name: 'Bookmark',
    route: 'Anatomy',
    icon: 'bookmark',
    bg: '#C5F442'
  },
  {
    id: 3,
    name: 'Download',
    route: 'Anatomy',
    icon: 'download',
    bg: '#C5F442'
  },
  {
    id: 4,
    name: 'My Booking',
    route: 'ScreenListBooking',
    icon: 'book',
    bg: '#C5F442'
  },
  {
    id: 5,
    name: 'Customers',
    route: 'Anatomy',
    icon: 'users',
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
          <ImageBackground source={drawerCover} style={{ flex: 1, height: 250, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
            <View style={{ justifyContent: 'center', width: 90, padding: 10 }}>
              <Thumbnail large source={drawerImage} style={{ backgroundColor: 'red' }} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
              <Text style={{ fontSize: 14, color: '#fff' }}>Welcome</Text>
              <Text style={{ color: '#fff', fontSize: 24 }}>Nofrets Poai Revina Purukan</Text>
            </View>
          </ImageBackground>
          <List
            dataArray={datas}
            keyExtractor={(item, index) => index.toString()}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    type='FontAwesome5'
                    // type?: "AntDesign" | "Entypo" | "EvilIcons" | "Feather" | "FontAwesome" | "FontAwesome5" | "Foundation" | "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons" | "Octicons" | "SimpleLineIcons" | "Zocial";
                    active
                    name={data.icon}
                    style={{ color: '#000', fontSize: 26, width: 30 }}
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
