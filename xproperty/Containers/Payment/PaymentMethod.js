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
import FormPayment from './FormPayment'

const dataArray = [
  {
    id: 1,
    title: 'Visa/Master',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sunt itaque adipisci quisquam pariatur qui, reiciendis architecto quod sint incidunt labore nisi totam illum numquam non magnam praesentium, maxime quaerat!'
  }
//   ,
//   {
//     title: 'Hard Cash',
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sunt itaque adipisci quisquam pariatur qui, reiciendis architecto quod sint incidunt labore nisi totam illum numquam non magnam praesentium, maxime quaerat!'
//   },
//   {
//     title: 'Bank Loan',
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sunt itaque adipisci quisquam pariatur qui, reiciendis architecto quod sint incidunt labore nisi totam illum numquam non magnam praesentium, maxime quaerat!'
//   }
]

class ScreenListPaymentPlan extends Component {
  render () {
    return (
      <Accordion
        dataArray={dataArray}
        animation={false}
        expanded={0}
        renderContent={(d) => (
          <View style={{ padding: 10 }}>
            {d.id === 1 && <FormPayment />}
          </View>
        )}
      />
    )
  }
}

export default ScreenListPaymentPlan
