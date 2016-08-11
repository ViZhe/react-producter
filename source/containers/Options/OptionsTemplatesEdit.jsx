
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {OptionsForm} from '~/containers'
import {OptionsTemplatesEdit} from '~/components'
import * as hz from '~/utils/horizon/helpers'


class OptionsTemplatesEditContainer extends Component {
  handleUpdateTemplate = data => {
    if (!Object.keys(data).length) {
      console.info('handleUpdateTemplate: No change')
      return
    }

    hz.optionsTemplates.update({
      ...data,
      id: this.props.params.id
    }).subscribe(
      res => console.info(`Update - Template - Success\nID: "${res.id}".`),
      err => console.error(`Update - Template - Fail: ${err}`)
    )
  }
  render() {
    const initials = this.props.options.templates.find(({id}) =>
      id === this.props.params.id
    )

    return (
      <OptionsForm initialValues={initials} onSubmit={this.handleUpdateTemplate} >
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
