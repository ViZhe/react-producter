
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

// const mapDispatchToProps = dispatch => ({
//   destroyField: data => dispatch(destroyField(data))
// })

export default connect(
  mapStateToProps
  // ,mapDispatchToProps
)(OptionsTemplatesListContainer)
