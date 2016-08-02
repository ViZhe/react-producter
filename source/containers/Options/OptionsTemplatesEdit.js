
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'

import {OptionsTemplatesEdit} from '~/components'
import * as hz from '~/utils/horizon/helpers'


class OptionsTemplatesEditContainer extends Component {
  handleUpdateTemplate = templateData => {
    if (Object.keys(templateData).length > 0) {
      hz.optionsTemplates.update({
        ...templateData,
        id: this.props.params.id
      }).subscribe(
        res => console.info(`Update - Template - Success\nId: "${res.id}".`),
        err => console.error(`Update - Template - Fail: ${err}`)
      )
    } else {
      console.info('updateTemplate', 'Поля не изменились.')
    }
  }
  render() {
    const template = this.props.options.templates.filter(template =>
      template.id === this.props.params.id
    )[0]

    return <OptionsTemplatesEdit
      template={template || {}}
      onSubmit={this.handleUpdateTemplate}
      {...this.props}
      />
  }
}


const mapStateToProps = state => ({
  options: {
    templates: state.options.toJS().templates,
    groups: state.options.toJS().groups
  }
})

export default connect(
  mapStateToProps
)(reduxForm({
  form: 'OptionsTemplatesEdit'
})(OptionsTemplatesEditContainer))
