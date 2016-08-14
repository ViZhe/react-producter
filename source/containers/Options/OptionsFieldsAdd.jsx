
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reset} from 'redux-form'

import {OptionsForm} from '~/containers'
import {OptionsFieldsAdd} from '~/components'
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
  validateForm = values => {
    const errors = {
      validate: {
        required: {},
        regex: {}
      }
    }

    if (!values.name) {
      errors.name = 'Required'
    }
    const validate = values.validate
    if (validate) {
      const required = validate.required
      if (required) {
        if (required.isActive && !required.title) {
          errors.validate.required.title = 'Required'
        }
      }
      const regex = validate.regex
      if (regex) {
        if (regex.isActive && !regex.title) {
          errors.validate.regex.title = 'Required'
        }
        if (regex.isActive && !regex.regex) {
          errors.validate.regex.regex = 'Required'
        }
      }
    }

    return errors
  }
  render() {
    return (
      <OptionsForm onSubmit={this.handleAddField} validate={this.validateForm} >
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
