
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reduxForm, reset} from 'redux-form'

import {OptionsGroupsAdd} from '~/components'
import * as hz from '~/utils/horizon/helpers'


class OptionsGroupsAddContainer extends Component {
  addGroup = fieldData => {
    hz.optionsGroups.store(fieldData).subscribe(
      result => console.info(`Create - Group - Success\nId: "${result.id}".`),
      err => console.error(`Create - Group - Fail: ${err}`),
      () => this.props.resetForm()
    )
  }
  render() {
    return <OptionsGroupsAdd
      onSubmit={::this.addGroup}
      {...this.props}
      />
  }
}


const mapStateToProps = state => ({
  options: {
    fields: state.options.toJS().fields
  }
})

const mapDispatchToProps = dispatch => ({
  resetForm: () => dispatch(reset('OptionsGroupsAdd'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({
  form: 'OptionsGroupsAdd'
})(OptionsGroupsAddContainer))
