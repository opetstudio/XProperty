import React, { Component } from 'react';
import { Image } from 'react-native';
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
} from 'native-base';
import styles from './style';
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
          style={{ flex: 1, backgroundColor: '#fff', top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Thumbnail large source={drawerImage} style={styles.drawerImage} />
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.userNameText}>Nofrets Poai</Text>
          {/* <Image square style={styles.drawerImage} source={drawerImage} /> */}

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
