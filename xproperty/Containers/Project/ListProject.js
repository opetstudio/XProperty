import React, { Component } from 'react'
import {
  Content,
  List,
  ListItem,
  Card,
  CardItem,
  Text
} from 'native-base'
import { View, Image, TouchableOpacity, RefreshControl } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import ProjectAction, { ProjectSelectors } from './redux'
import { Images } from '../../Themes'

const cardImage = Images.cardImage2
const styles = {
  mb: {
    marginBottom: 1
  },
  text: {
    alignSelf: 'center',
    marginBottom: 7
  }
}

function wait (timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}

// const [refreshing, setRefreshing] = React.useState(false)
class ListProjects extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleOnRefresh = this.handleOnRefresh.bind(this)
    console.log('ListProjects constructor')
  }

  handleOnRefresh () {
    // this.setState({ refreshing: true })
    // wait(2000).then(() => this.setState({ refreshing: false }))
    this.props.projectFetchAll({})
  }

  componentWillMount () {
    console.log('ListProjects componentWillMount')
    this.props.projectFetchAll({})
  }

  componentWillUnmount () {
    console.log('ListProjects componentWillUnmount')
  }

  render () {
    const { ir } = this.props.projectFetchAllMSG
    if (ir) wait(5000).then(() => this.props.projectPatch({ projectFetchAllMSG: { ...this.props.projectFetchAllMSG, ir: false } }))
    return (
      <Content
        padder
        refreshControl={
          <RefreshControl
            refreshing={ir}
            onRefresh={this.handleOnRefresh}
            title='Loading...'
          />
        }
      >
        <List
          keyExtractor={(item, index) => index.toString()}
          dataArray={this.props.allProjectArr}
          renderRow={data =>
            <ListItem
              noBorder
              style={{ paddingBottom: 2, paddingTop: 2, paddingRight: 0, marginLeft: 0 }}
            >
              <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.navigate('ScreenDetailProject', { projectId: data.id })}>
                <Card style={styles.mb}>
                  <CardItem cardBody>
                    <Image
                      style={{
                        resizeMode: 'cover',
                        width: null,
                        height: 200,
                        flex: 1
                      }}
                      source={{ uri: data.picture }}
                    />
                    <View style={{ position: 'absolute', bottom: 0, backgroundColor: '#000', opacity: 0.5, height: 70, width: '100%' }} />
                    <View style={{ position: 'absolute', bottom: 0, height: 70, width: '100%', padding: 5 }}>
                      <Text style={{ color: '#fff' }}>{data.title}</Text>
                      <Text style={{ color: '#cdcdcd', fontSize: 11 }}>{data.location}</Text>
                    </View>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            </ListItem>}
        />
      </Content>
    )
  }
}

// export default ScreenListProjects
const mapStateToProps = (state, ownProps) => {
// const foo = params.get('foo'); // bar
  return {
    projectFetchAllMSG: ProjectSelectors.projectFetchAllMSG(state.project),
    allProjectArr: ProjectSelectors.getAllProjectArr(state.project)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    projectFetchAll: data => dispatch(ProjectAction.projectFetchAll(data)),
    projectPatch: data => dispatch(ProjectAction.projectPatch(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(ListProjects))
