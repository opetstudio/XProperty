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
  ScrollView, Modal, TouchableHighlight, View, Alert
} from 'react-native'
import ModalContent from './ModalContent'
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
const cols = ['Action', 'Company', 'Project', 'Cluster', 'Tipe', 'Harga', 'LT', 'LB']
class Icons extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false
    }
    this.setModalVisible = this.setModalVisible.bind(this)
  }
  // state = {
  //   modalVisible: false
  // }

  setModalVisible (visible) {
    this.setState({ modalVisible: visible })
  }

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
          <Right>
            <Button transparent onPress={() => this.setModalVisible(true)}>
              <Icon type='FontAwesome' name='filter' />
              <Text>Filter</Text>
            </Button>
          </Right>
        </Header>

        <Content padder horizontal>
          <ScrollView>
            <Grid>
              <Row key='ht' style={styles.row}>
                {cols.map((r, i) => (
                  <Col key={i} style={[styles.col, styles[`col${i}`]]}><Text numberOfLines={1} style={styles.iconText}>{r}</Text></Col>
                ))}
              </Row>
              {floor.map((f, i) => (
                <Row key={i} style={styles.row}>
                  {cols.map((r, i) => {
                    if (i === 0) {
                      return (<Col key={i} style={[styles.col, styles[`col${i}`]]}><Button small onPress={() => this.props.navigation.navigate('ScreenBooking')}><Text numberOfLines={1} style={styles.iconText}>Select</Text></Button></Col>)
                    } else return (<Col key={i} style={[styles.col, styles[`col${i}`]]}><Text numberOfLines={1} style={styles.iconText}>-</Text></Col>)
                  })}
                </Row>
              ))}
            </Grid>
          </ScrollView>
        </Content>
        <Modal
          animationType='slide'
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.')
            this.setModalVisible(!this.state.modalVisible)
          }}
          closeOnClick
        >
          {/* <TouchableHighlight style={{backgroundColor: 'red', height: '100%'}} onPress={() => Alert.alert('cek')}> */}
          <ModalContent
            setModalVisible={this.setModalVisible}
            modalVisible={this.state.modalVisible}
          />
          {/* </TouchableHighlight> */}
        </Modal>
      </Container>
    )
  }
}

export default Icons
