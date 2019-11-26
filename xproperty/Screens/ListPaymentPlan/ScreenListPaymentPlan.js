import React, { Component } from 'react'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Accordion,
  Text
} from 'native-base'
import { View } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import styles from './styles'

const dataArray = [
  {
    title: 'Developer Installment',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sunt itaque adipisci quisquam pariatur qui, reiciendis architecto quod sint incidunt labore nisi totam illum numquam non magnam praesentium, maxime quaerat!'
  },
  {
    title: 'Hard Cash',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sunt itaque adipisci quisquam pariatur qui, reiciendis architecto quod sint incidunt labore nisi totam illum numquam non magnam praesentium, maxime quaerat!'
  },
  {
    title: 'Bank Loan',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sunt itaque adipisci quisquam pariatur qui, reiciendis architecto quod sint incidunt labore nisi totam illum numquam non magnam praesentium, maxime quaerat!'
  }
]

class ScreenListPaymentPlan extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Payment Plan</Title>
          </Body>
          <Right />
        </Header>
        <Content padder style={{ backgroundColor: 'white' }}>
          <Accordion
            dataArray={dataArray}
            animation={false}
            expanded={0}
            renderContent={(d) => (
              <View style={{ padding: 10 }}>
                <View style={styles.rowWrapper}>
                  <Text style={styles.rowLeftColText}>DP xx%</Text>
                  <Text style={styles.rowRightColText}>Rp. xxx.xxx.xxx</Text>
                </View>
                <View style={styles.rowWrapper}>
                  <Text style={styles.rowLeftColText}>Installment (xx%)</Text>
                  <Text style={styles.rowRightColText}>Rp. xxx.xxx.xxx</Text>
                </View>
                <View style={styles.rowWrapper}>
                  <Text style={styles.rowLeftColText} />
                  <Text style={styles.rowRightColText}>----------------+</Text>
                </View>
                <View style={styles.rowWrapper}>
                  <Text style={styles.rowLeftColText}>Total</Text>
                  <Text style={styles.rowRightColText}>Rp. xxx.xxx.xxx</Text>
                </View>
                <View style={[styles.rowWrapper, { marginTop: 10 }]}>
                  <Text style={styles.rowLeftColText}>@Installment</Text>
                  <Text style={styles.rowRightColText}>Rp. xxx.xxx.xxx</Text>
                </View>
                <Button rounded style={{ justifyContent: 'center', margin: 10 }} onPress={() => this.props.navigation.navigate('ScreenDetailBooking')}><Text>Submit Payment Plan</Text></Button>
              </View>
            )}
          />
        </Content>
      </Container>
    )
  }
}

export default ScreenListPaymentPlan
