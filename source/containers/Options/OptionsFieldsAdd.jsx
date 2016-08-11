
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reset} from 'redux-form'

import {OptionsForm} from '~/containers'
import {OptionsFieldsAdd} from '~/components'
import * as hz from '~/utils/horizon/helpers'


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
    return (
      <OptionsForm onSubmit={this.handleAddField} >
        <OptionsFieldsAdd />
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
