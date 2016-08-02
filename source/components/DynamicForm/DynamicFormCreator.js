
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
  loadOptionsTemplates,
  loadOptionsGroups,
  loadOptionsFields
} from '~/core/options/actions'
import DynamicForm from './DynamicForm'
import * as hz from '~/utils/horizon/helpers'


class DynamicFormCreator extends Component {
  componentDidMount() {
    hz.optionsTemplates.watch().subscribe(response => {
      this.props.dispatch(loadOptionsTemplates(response))
    })
    hz.optionsGroups.watch().subscribe(response => {
      this.props.dispatch(loadOptionsGroups(response))
    })
    hz.optionsFields.watch().subscribe(response => {
      this.props.dispatch(loadOptionsFields(response))
    })
  }
  render() {
    const {options, template, onSubmit, submitButtonText} = this.props

    const fields = []
    const initialValues = {}
    const validateList = {}

    const currentTemplate = options.templates.filter(tpl =>
      tpl.name === template
    )[0]
    const currentGroups = options.groups.filter(group =>
      currentTemplate.groups.indexOf(group.id) >= 0
    )

    currentGroups.forEach(group =>
      options.fields.filter(field => group.fields.indexOf(field.id) >= 0)
        .forEach(field => {
          const fieldName = field.name
          const fieldDefault = field.default
          const fieldValidate = field.validate

          fields.push(fieldName)

          if (fieldDefault !== '' && typeof fieldDefault !== 'undefined') {
            initialValues[fieldName] = fieldDefault
          }

          if (fieldValidate !== '' && typeof fieldValidate !== 'undefined') {
            validateList[fieldName] = fieldValidate
          }
        })
    )

    const validate = values => {
      const errors = {}

      for (const fieldName in validateList) {
        if ({}.hasOwnProperty.call(validateList, fieldName)) {
          const validations = validateList[fieldName]

          validations.forEach(valid => {
            if (errors[fieldName]) {
              return
            }
            const type = valid.type

            if (type === 'regex') {
              const regex = new RegExp(valid.regex, 'i')
              if (!regex.test(values[fieldName])) {
                errors[fieldName] = valid.title
              }
            } else if (type === 'required') {
              if (!values[fieldName]) {
                errors[fieldName] = valid.title
              }
            }

            // TODO: add more validators
          })
        }
      }

      return errors
    }

    return <DynamicForm
      groupsList={currentGroups}
      fieldsList={options.fields}
      fields={fields}
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      submitButtonText={submitButtonText}
      // normalize={{title: value => value && value.toUpperCase()}} //  TODO: check it
      />
  }
}


const mapStateToProps = state => ({
  options: state.options.toJS()
})

export default connect(
  mapStateToProps
)(DynamicFormCreator)
