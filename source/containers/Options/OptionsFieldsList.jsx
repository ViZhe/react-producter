
import React from 'react'
import {connect} from 'react-redux'

import {OptionsFieldsList} from '~/components'


const OptionsFieldsListContainer = ({options: {fields}}) => (
  <OptionsFieldsList
    fields={fields}
  />
)

const mapStateToProps = state => ({
  options: {
    fields: state.options.toJS().fields
  }
})

export default connect(
  mapStateToProps
)(OptionsFieldsListContainer)
