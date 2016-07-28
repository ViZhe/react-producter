
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {OptionsTemplatesList} from '~/components'


class OptionsTemplatesListContainer extends Component {
  render() {
    return <OptionsTemplatesList
      {...this.props}
      />
  }
}


const mapStateToProps = state => ({
  options: {
    templates: state.options.toJS().templates
  }
})

export default connect(
  mapStateToProps
)(OptionsTemplatesListContainer)
