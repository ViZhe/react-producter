
import React from 'react'
import {connect} from 'react-redux'

import {OptionsTemplatesList} from '~/components'


const OptionsTemplatesListContainer = ({options: {templates}}) => (
  <OptionsTemplatesList
    templates={templates}
  />
)


const mapStateToProps = state => ({
  options: {
    templates: state.options.toJS().templates
  }
})

export default connect(
  mapStateToProps
)(OptionsTemplatesListContainer)
