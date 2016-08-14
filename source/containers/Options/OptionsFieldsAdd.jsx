
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reset} from 'redux-form'

import {OptionsForm} from '~/containers'
import {OptionsFieldsAdd} from '~/components'
import createValidate from '~/utils/options/validationFields'
import * as hz from '~/api/horizon/helpers'


class OptionsFieldsAddContainer extends Component {
  handleAddField = data => {
    if (!Object.keys(data).length) {
      console.info('handleAddField: No change')
      return
    }

    hz.optionsFields.store(data).subscribe(
      res => console.info(`Create - Field - Success\nID: "${res.id}".`),
      err => console.error(`Create - Field - Fail: ${err}`),
      () => this.props.resetForm()
    )
  }
  render() {
    const validate = values => createValidate(values)

    return (
      <OptionsForm onSubmit={this.handleAddField} validate={validate} >
        <OptionsFieldsAdd
          validateList={['required', 'regex']}
        />
      </OptionsForm>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  resetForm: () => dispatch(reset('OptionsForm'))
})

export default connect(
  null,
  mapDispatchToProps
)(OptionsFieldsAddContainer)
