
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import {OptionsForm} from '~/containers'
import {OptionsTemplatesEdit} from '~/components'
import createValidate from '~/utils/options/validationTemplates'
import * as hz from '~/api/horizon/helpers'


class OptionsTemplatesEditContainer extends Component {
  handleUpdateTemplate = data => {
    if (!Object.keys(data).length) {
      console.info('handleUpdateTemplate: No change')
      return
    }

    hz.optionsTemplates.update(data).subscribe(
      res => {
        console.info(`Update - Template - Success\nID: "${res.id}"`)
        browserHistory.replace(
          this.props.location.pathname.replace(/[^\/]+$/, data.name)
        )
      },
      err => console.error(`Update - Template - Fail: ${err}`)
    )
  }
  render() {
    const validate = values => createValidate(values)
    const initials = this.props.options.templates.find(({name}) =>
      name === this.props.params.name
    )

    return (
      <OptionsForm
        initialValues={initials}
        validate={validate}
        onSubmit={this.handleUpdateTemplate}
      >
        <OptionsTemplatesEdit groups={this.props.options.groups} />
      </OptionsForm>
    )
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
)(OptionsTemplatesEditContainer)
