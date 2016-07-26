
import React, {Component} from 'react'
import {connect} from 'react-redux'

import OptionsFieldsList from '~/components/Options/OptionsFieldsList'


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

// const mapDispatchToProps = dispatch => ({
//   destroyField: data => dispatch(destroyField(data))
// })

export default connect(
  mapStateToProps
  // ,mapDispatchToProps
)(OptionsFieldsListContainer)
