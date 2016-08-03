
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'

import {OptionsFieldsEdit} from '~/components'
import * as hz from '~/utils/horizon/helpers'


class OptionsFieldsEditContainer extends Component {
  handleUpdateField = data => {
    if (!Object.keys(data).length) {
      console.info('handleUpdateField: Поля не изменились.')
      return
    }

    hz.optionsFields.update({
      ...data,
      id: this.props.params.id
    }).subscribe(
      res => console.info(`Update - Field - Success\nId: "${res.id}".`),
      err => console.error(`Update - Field - Fail: ${err}`)
    )
  }
  render() {
    const field = this.props.options.fields.filter(field =>
      field.id === this.props.params.id
    )[0]

    return <OptionsFieldsEdit
      field={field || {}}
      onSubmit={this.handleUpdateField}
      {...this.props}
      />
  }
}


const mapStateToProps = state => ({
  options: {
    fields: state.options.toJS().fields
  }
})

export default connect(
  mapStateToProps
)(reduxForm({
  form: 'OptionsFieldsEdit'
})(OptionsFieldsEditContainer))
