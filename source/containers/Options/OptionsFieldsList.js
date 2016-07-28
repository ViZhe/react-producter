
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {OptionsFieldsList} from '~/components'


class OptionsFieldsListContainer extends Component {
  render() {
    return <OptionsFieldsList
      {...this.props}
      />
  }
}


const mapStateToProps = state => ({
  options: {
    fields: state.options.toJS().fields
  }
})

export default connect(
  mapStateToProps
)(OptionsFieldsListContainer)
