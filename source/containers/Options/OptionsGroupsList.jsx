
import React from 'react'
import {connect} from 'react-redux'

import {OptionsGroupsList} from '~/components'


const OptionsGroupsListContainer = ({options: {groups}}) => (
  <OptionsGroupsList
    groups={groups}
  />
)

const mapStateToProps = state => ({
  options: {
    groups: state.options.toJS().groups
  }
})

export default connect(
  mapStateToProps
)(OptionsGroupsListContainer)
