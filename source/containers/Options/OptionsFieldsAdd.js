
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reduxForm, reset} from 'redux-form'

import {OptionsFieldsAdd} from '~/components'
import * as hz from '~/utils/horizon/helpers'


class OptionsFieldsAddContainer extends Component {
  handleAddField = fieldData => {
    hz.optionsFields.store(fieldData).subscribe(
      res => console.info(`Create - Field - Success\nID: "${res.id}".`),
      err => console.error(`Create - Field - Fail: ${err}`),
      () => this.props.resetForm()
    )
  }
  render() {
    return <OptionsFieldsAdd
      onSubmit={this.handleAddField}
      {...this.props}
      />
  }
}


const mapDispatchToProps = dispatch => ({
  resetForm: () => dispatch(reset('OptionsFieldsAdd'))
})

export default connect(
  null,
  mapDispatchToProps
)(reduxForm({
  form: 'OptionsFieldsAdd'
})(OptionsFieldsAddContainer))
