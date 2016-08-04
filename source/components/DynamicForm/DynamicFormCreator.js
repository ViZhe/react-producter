
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
    const {product, template, options: {templates, groups, fields}, onSubmit, submitButtonText} = this.props
    const validateList = {}

    const currentTemplate = templates.find(({name}) => name === template)
    const currentGroups = groups.filter(({id}) =>
      currentTemplate.groups.indexOf(id) >= 0
    )

    fields.forEach(({name, validate}) => {
      if (validate) {
        validateList[name] = validate
      }
    })

    const validate = values => {
      const errors = {}

      for (const fieldName in validateList) {
        if (!{}.hasOwnProperty.call(validateList, fieldName)) {
          return
        }

        validateList[fieldName].forEach(({type, ...valid}) => {
          if (errors[fieldName]) {
            return
          }

          if (type === 'required') {
            if (!values[fieldName]) {
              errors[fieldName] = valid.title
            }
          } else if (type === 'regex') {
            const regex = new RegExp(valid.regex, 'i')
            if (!regex.test(values[fieldName])) {
              errors[fieldName] = valid.title
            }
          }

          // TODO: add more validators
        })
      }

      return errors
    }

    return <DynamicForm
      product={product}
      template={template}
      groups={currentGroups}
      fields={fields}
      validate={validate}
      onSubmit={onSubmit}
      submitButtonText={submitButtonText}
      />
  }
}


const mapStateToProps = state => ({
  options: state.options.toJS()
})

export default connect(
  mapStateToProps
)(DynamicFormCreator)
