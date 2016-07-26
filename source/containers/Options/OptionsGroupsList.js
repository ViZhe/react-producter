
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {OptionsGroupsList} from '~/components'


class OptionsGroupsListContainer extends Component {
  render() {
    return <OptionsGroupsList
      {...this.props}
      />
  }
}


const mapStateToProps = state => ({
  options: {
    groups: state.options.toJS().groups
  }
})

// const mapDispatchToProps = dispatch => ({
//   destroyField: data => dispatch(destroyField(data))
// })

export default connect(
  mapStateToProps
  // ,mapDispatchToProps
)(OptionsGroupsListContainer)
