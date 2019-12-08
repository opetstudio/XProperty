import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import ProjectAction, { ProjectSelectors } from './redux'
import DetailContent from '../../Components/DetailContent'

class DetailProject extends Component {
  componentWillMount () {
    this.props.projectFetchOne({})
  }

  render () {
    return (
      <DetailContent
        title={this.props.detailProject.title}
        description={this.props.detailProject.description}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // const foo = params.get('foo'); // bar

  return {
    projectFetchOneMSG: ProjectSelectors.projectFetchOneMSG(state.project),
    detailProject: ProjectSelectors.getProjectById(state.project, ownProps.projectId)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    projectFetchOne: data => dispatch(ProjectAction.projectFetchOne(data)),
    projectPatch: data => dispatch(ProjectAction.projectPatch(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(DetailProject))
