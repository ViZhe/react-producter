
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reset} from 'redux-form'

import {OptionsForm} from '~/containers'
import {OptionsTemplatesAdd} from '~/components'
import * as hz from '~/api/horizon/helpers'


class OptionsTemplatesAddContainer extends Component {
  handleAddTemplate = data => {
    if (!Object.keys(data).length) {
      console.info('handleAddTemplate: No change')
      return
    }

    hz.optionsTemplates.store(data).subscribe(
      res => console.info(`Create - Template - Success\nID: "${res.id}".`),
      err => console.error(`Create - Template - Fail: ${err}`),
      () => this.props.resetForm()
    )
  }
  render() {
    return (
      <OptionsForm onSubmit={this.handleAddTemplate} >
        <OptionsTemplatesAdd groups={this.props.options.groups} />
      </OptionsForm>
    )
  }
}


const mapStateToProps = state => ({
  options: {
    groups: state.options.toJS().groups
  }
})

const mapDispatchToProps = dispatch => ({
  resetForm: () => dispatch(reset('OptionsForm'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsTemplatesAddContainer)
