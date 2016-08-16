
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import {OptionsForm} from '~/containers'
import {OptionsFieldsEdit} from '~/components'
import createValidate from '~/utils/options/validationFields'
import * as hz from '~/api/horizon/helpers'


class OptionsFieldsEditContainer extends Component {
  handleUpdateField = data => {
    if (!Object.keys(data).length) {
      console.info('handleUpdateField: No change')
      return
    }

    hz.optionsFields.update(data).subscribe(
      res => {
        console.info(`Update - Field - Success\nID: "${res.id}"`)
        browserHistory.replace(
          this.props.location.pathname.replace(/[^\/]+$/, data.name)
        )
      },
      err => console.error(`Update - Field - Fail: ${err}`)
    )
  }
  render() {
    const validate = values => createValidate(values)
    const initials = this.props.options.fields.find(({name}) =>
      name === this.props.params.name
    )

    return (
      <OptionsForm
        initialValues={initials}
        validate={validate}
        onSubmit={this.handleUpdateField}
      >
        <OptionsFieldsEdit
          validateList={['required', 'regex']}
        />
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
