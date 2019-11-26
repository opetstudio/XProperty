import React, { Component } from 'react'
import _ from 'lodash'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  Grid,
  Col,
  Row
} from 'native-base'
import {
  ScrollView
} from 'react-native'
import styles from './styles'

const floor = []
for (let i = 12; i >= 1; i--) {
  const room = []
  for (let j = 0; j <= 20; j++) {
    if (i === 12 && j === 0) {
      room.push('00')
    } else if (i === 12) {
      room.push(`${_.padStart(j, 2, '0')}`)
    } else if (j === 0) {
      room.push(`${_.padStart(i, 2, '0')}`)
    } else {
      room.push(`${_.padStart(i, 2, '0')}${_.padStart(j, 2, '0')}`)
    }
  }
  floor.push(room)
}
class Icons extends Component {
  render () {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>List Units</Title>
          </Body>
          <Right />
        </Header>

        <Content padder horizontal>
          <ScrollView>
            <Grid>
              {floor.map((f, i) => (
                <Row key={i} style={styles.row}>
                  {f.map((r, j) => {
                    if (r === '00') {
                      return (
                        <Col key={j} style={styles.col}>
                          {/* <Icon name='pizza' style={{ color: '#ffc125' }} /> */}
                          <Text numberOfLines={1} style={styles.iconText}>
                            Floor/
                          </Text>
                          <Text numberOfLines={1} style={styles.iconText}>
                            Room
                          </Text>
                        </Col>
                      )
                    } else if (r.length === 2) {
                      return (
                        <Col key={j} style={[styles.col]}>
                          {/* <Icon name='pizza' style={{ color: '#ffc125' }} /> */}
                          <Text numberOfLines={1} style={styles.iconText}>
                            {`${r}`}
                          </Text>
                        </Col>
                      )
                    } else {
                      return (
                        <Col key={j} style={[styles.col, { backgroundColor: '#fff' }]} onPress={() => this.props.navigation.navigate('ScreenBooking')}>
                          {/* <Icon name='pizza' style={{ color: '#ffc125' }} /> */}
                          <Text numberOfLines={1} style={styles.iconText}>
                            {`${r}`}
                          </Text>
                        </Col>
                      )
                    }
                  })}
                </Row>
              ))}
            </Grid>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default Icons
