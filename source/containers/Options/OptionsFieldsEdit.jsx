
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {OptionsForm} from '~/containers'
import {OptionsFieldsEdit} from '~/components'
import * as hz from '~/api/horizon/helpers'


class OptionsFieldsEditContainer extends Component {
  handleUpdateField = data => {
    if (!Object.keys(data).length) {
      console.info('handleUpdateField: No change')
      return
    }

    hz.optionsFields.update({
      ...data,
      id: this.props.params.id
    }).subscribe(
      res => console.info(`Update - Field - Success\nID: "${res.id}".`),
      err => console.error(`Update - Field - Fail: ${err}`)
    )
  }
  render() {
    const initials = this.props.options.fields.find(({id}) =>
      id === this.props.params.id
    )

    return (
      <OptionsForm initialValues={initials} onSubmit={this.handleUpdateField} >
        <OptionsFieldsEdit />
      </OptionsForm>
    )
  }
}


const mapStateToProps = state => ({
  options: {
    fields: state.options.toJS().fields
  }
})

export default connect(
  mapStateToProps
)(OptionsFieldsEditContainer)
