
import React, {Component} from 'react'
import {connect} from 'react-redux'

import DynamicForm from '~/components/DynamicForm/DynamicForm'
import {
  loadOptionsTemplates,
  loadOptionsGroups,
  loadOptionsFields
} from '~/core/options/actions'
import * as hz from '~/api/horizon/helpers'


class DynamicFormCreator extends Component {
  componentWillMount() {
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
    const {
      product, template,
      options: {templates, groups, fields},
      onSubmit, submitButtonText
    } = this.props

    console.log('groups', groups)
    console.log('template', template)

    const currentTemplate = templates.find(({name}) => name === template)
    console.log('currentTemplate', currentTemplate)
    const currentGroups = groups.filter(({id}) =>
      currentTemplate.groups.indexOf(id) >= 0
    )

    const validateList = {}
    const initialList = {}
    currentGroups.forEach(group => {
      fields.filter(({id}) => group.fields.indexOf(id) >= 0)
        .forEach(({name, validate, defaultValue}) => {
          if (validate) {
            validateList[name] = validate
          }
          if (product && product.options[name]) {
            initialList[name] = product.options[name]
          }
          if (!product && defaultValue) {
            initialList[name] = defaultValue
          }
        })
    })

    let initialValues
    if (Object.keys(initialList).length) {
      initialValues = initialList
    }


    const validate = values => {
      const errors = {}

      Object.keys(validateList).forEach(key => {
        if (errors[key]) {
          return
        }
        const valRegex = validateList[key].regex
        const valRequired = validateList[key].required
        if (valRegex && valRegex.isActive) {
          const regex = new RegExp(valRegex.regex, 'i')
          if (!regex.test(values[key])) {
            errors[key] = valRegex.title
          }
        }
        if (valRequired && valRequired.isActive) {
          if (!values[key]) {
            errors[key] = valRequired.title
          }
        }

        // TODO: add more validators
      })

      return errors
    }

    return (
      <DynamicForm
        groups={currentGroups}
        fields={fields}
        onSubmit={onSubmit}
        submitButtonText={submitButtonText}
        initialValues={initialValues}
        validate={validate}
      />
    )
  }
}


const mapStateToProps = state => ({
  options: state.options.toJS()
})

export default connect(
  mapStateToProps
)(DynamicFormCreator)
