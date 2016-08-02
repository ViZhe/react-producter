
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reduxForm, reset} from 'redux-form'

import {OptionsGroupsAdd} from '~/components'
import * as hz from '~/utils/horizon/helpers'


class OptionsGroupsAddContainer extends Component {
  handleAddGroup = fieldData => {
    hz.optionsGroups.store(fieldData).subscribe(
      res => console.info(`Create - Group - Success\nId: "${res.id}".`),
      err => console.error(`Create - Group - Fail: ${err}`),
      () => this.props.resetForm()
    )
  }
  render() {
    return <OptionsGroupsAdd
      onSubmit={this.handleAddGroup}
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
