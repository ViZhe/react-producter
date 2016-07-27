
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reduxForm, reset} from 'redux-form'

import {OptionsFieldsAdd} from '~/components'
import * as hz from '~/utils/horizon/helpers'


class OptionsFieldsAddContainer extends Component {
  addField = fieldData => {
    hz.optionsFields.store(fieldData).subscribe(
      result => console.info(`Create - Field - Success\nId: "${result.id}".`),
      err => console.error(`Create - Field - Fail: ${err}`),
      () => this.props.dispatch(reset('OptionsFieldsAdd'))
    )
  }
  render() {
    return <OptionsFieldsAdd
      onSubmit={::this.addField}
      {...this.props}
      />
  }
}


export default connect()(reduxForm({
  form: 'OptionsFieldsAdd'
})(OptionsFieldsAddContainer))
